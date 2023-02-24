import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth, Dashboard } from './layouts';
import { Home, Messages, Profile } from './pages/dashboard';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return <RoutesApp />;
}

export default App;
