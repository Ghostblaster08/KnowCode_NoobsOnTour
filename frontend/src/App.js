import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Scanner from './components/Scanner/Scanner';
import GreenBot from './components/GreenBot/GreenBot';
import Travel from './components/Travel/Travel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/greenbot" element={<GreenBot />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </Router>
  );
}

export default App;