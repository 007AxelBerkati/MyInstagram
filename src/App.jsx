import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Messages } from './pages/dashboard';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

function App() {
  return <RoutesApp />;
}

export default App;
