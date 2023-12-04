import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, MinusIcon } from '@heroicons/react/24/solid';
import { v4 as uuidv4 } from 'uuid';

const RoomChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [user_id, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUniqueUserId = () => {
      let storedUserId = sessionStorage.getItem('user_id');

      if (!storedUserId) {
        storedUserId = uuidv4();
        sessionStorage.setItem('user_id', storedUserId);
      }

      return storedUserId;
    };

    setUserId(getUniqueUserId());
  }, []);

  const handleSendMessage = async () => {
    console.log('Sending payload:', {
      query: newMessage,
      user_id: user_id,
    });

    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage('');

      try {
        setLoading(true);

        const response = await fetch('https://mrneuralnet-chain-link-ai.hf.space/bot_interaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: newMessage,
            user_id: user_id,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          const botResponseText = result[0].text;
          const botResponseMessage = { text: botResponseText, sender: 'bot' };

          setMessages((prevMessages) => [...prevMessages, botResponseMessage]);
          setBotResponse(botResponseText);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent the default behavior (line break)
      handleSendMessage();
    }
  };

  // Menangani representasi teks dengan line break dalam JSX
  const renderMessageText = (text, isUser) => {
    // Check if the message is from the user or the bot
    if (isUser) {
      // For user messages, keep the existing behavior
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      // For bot messages, remove the first line break
      const lines = text.split('\n');
      if (lines.length > 0 && lines[0] === '') {
        lines.shift();
      }
  
      return lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }
  };
  

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row text-white px-7 py-6 bg-zinc-900	 justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src="/bot_img2.jpg"
            alt="Chatbot Logo"
            className="rounded-full border-none outline-none"
            width={45}
            height={45}
          />
          <div>
            <h1 className='text-2xl font-bold text-gray-300'>Chainlink Chatbot</h1>
            <p className={`${loading ? 'opacity-1' : 'opacity-0'}`}>Chatbot is typing...</p>
          </div>
        </div>
      </div>

      <div className='flex-grow overflow-y-auto p-5 bg-zinc-800	 shadow-inner'>
        {messages.map((message, index) => (
          <div
            className={`px-5 py-5 flex mb-1 flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
            key={index}
          >
            <span
              className='py-2'
              style={{
                color: 'white',
                fontWeight:'bold'
              }}
            >
              {message.sender === 'user' ? 'You' : 'Bot'}
            </span>

            <span
              className={`px-5 py-3 w-fit max-w-4xl break-all  ${message.sender === 'user' ? 'bg-orange-700 text-gray-100' : 'bg-zinc-900 text-gray-300'}`}
              style={{
                borderRadius: '5px',
              }}
            >
              {renderMessageText(message.text)}
            </span>
          </div>
        ))}
      </div>

      <div className='bg-zinc-900	 p-4 flex flex-row gap-4 focus-visible:border-cyan-400'>
        <textarea
          onKeyDown={handleKeyPress}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder='Type your message...'
          className='w-full min-h-[5vh] max-h-[20vh] px-4 py-2 text-gray-300 bg-zinc-800 resize-none rounded-xl placeholder:text-gray-300/30 focus-visible:outline outline-offset-0 outline-orange-700/50    '
        />
        <button
          onClick={handleSendMessage}
          className={`text-white px-6 py-2 rounded-xl ${loading ? 'bg-gray-500' : 'bg-orange-700'}`}
          disabled={loading}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default RoomChat;
