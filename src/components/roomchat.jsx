import React, { useState } from 'react';
import Image from 'next/image'
import { XMarkIcon, MinusIcon  } from '@heroicons/react/24/solid'

const RoomChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentSender, setCurrentSender] = useState('user'); // Menentukan pengirim pesan (user atau lawan bicara)

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: currentSender }]);
      setNewMessage('');
      setCurrentSender(currentSender === 'user' ? 'bot' : 'user'); // Bergantian antara user dan opponent
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
