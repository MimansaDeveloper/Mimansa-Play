import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BalloonPopGame from './components/BalloonPopGame';
import BalloonStartScreen from './components/BalloonStartScreen';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BalloonStartScreen />} />
        <Route path="/game" element={<BalloonPopGame />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </Router>
  );
}

export default App;
