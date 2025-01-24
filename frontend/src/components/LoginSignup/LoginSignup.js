import React, { useState } from 'react';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      console.log('Login attempted');
      window.location.href = '/dashboard';
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="flex mb-6">
          <button 
            className={`w-1/2 py-2 ${activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`w-1/2 py-2 ${activeTab === 'register' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
            <input 
              type="email" 
              placeholder="Email" 
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <button 
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;