import React, { useState } from "react";
import axios from "axios";

const GreenBot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/greenbot/chatbot/",
        { message: userMessage }
      );
      setBotResponse(response.data.response);
    } catch (error) {
      console.error("Error communicating with chatbot API:", error);
    }
  };

  return (
    <div>
      <h1>GreenBot Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
      {botResponse && <p>Bot says: {botResponse}</p>}
    </div>
  );
};

export default GreenBot;
