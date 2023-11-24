import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { XMarkIcon, MinusIcon  } from '@heroicons/react/24/solid'
import { v4 as uuidv4 } from 'uuid';

const RoomChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [botResponse, setBotResponse] = useState(''); 
  const [user_id, setUserId] = useState('');

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
    if (newMessage.trim() !== '') {

      console.log('Sending payload:', { query: newMessage, user_id });

      try {
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
  
          setMessages([...messages, { text: newMessage, sender: 'user' }, { text: botResponseText, sender: 'bot' }]);
          setBotResponse(botResponseText);
          setNewMessage('');
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  



  return (
    <div className='rounded-lg border-solid border-2  md:w-[30vw] md:h-[60vh] m-0 p-0  h-[100%] w-[100vw]' >
        <div className='flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between'>
            <div className='flex flex-row items-center gap-4'>
            <Image
              src="/FloatingRobot.jpg"
              alt="Chatbot Logo"
              className="rounded-full"
              width={45}
              height={45}
            />
            <h1 className='text-2xl font-bold'>Chatbot</h1>
            </div>
            
            <div className='flex flex-row gap-2'>
           <MinusIcon className="text-white h-8 w-8 font-bold" />
           <XMarkIcon className="text-white h-8 w-8 font-bold" />
            
         
            </div>
        </div>
      <div className='bg-sky-100 h-full overflow-y-auto p-5 h-[80vh]  shadow-inner' >
        {messages.map((message, index) => (
          <div
          className={`px-5 py-5 flex mb-1 flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
            key={index}
           
          >
            <span
            className=' py-2 '
              style={{
                color: 'Black',
              }}
            >
               {message.sender === 'user' ? 'You' : 'Bot'}
            </span>

            <span
            className='px-4 py-2 w-fit'
              style={{
                background: message.sender === 'user' ? '#4CAF50' : '#008CBA',
                color: 'white',
               
                borderRadius: '5px',
              }}
            >
              {message.text}
            </span>
          </div>
        ))}

      </div>
      <div className='bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400' >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className='w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400'
        />
        <button onClick={handleSendMessage} className='text-white bg-cyan-400 px-6 py-2 rounded-xl' >
          Send
        </button>
      </div>
    </div>
  );
};

export default RoomChat;
