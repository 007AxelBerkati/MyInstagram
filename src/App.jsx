import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Messages, Profile } from './pages/dashboard';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

function App() {
  return <RoutesApp />;
}

export default App;
