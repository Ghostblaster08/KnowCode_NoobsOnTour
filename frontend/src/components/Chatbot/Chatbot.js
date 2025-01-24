import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'You' }]);
      setInput(''); // Clear input after sending
      // Here you would typically call a backend service or API to get a response from the chatbot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm a chatbot. How can I help you?", user: 'Chatbot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="container mt-5">
      <h1>GreenBot</h1>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user === 'You' ? 'user-message' : 'bot-message'}`}>
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;