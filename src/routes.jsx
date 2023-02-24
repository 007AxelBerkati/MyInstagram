import React from 'react';
import { Login, Register } from './pages/auth';
import { Home, Messages, Profile } from './pages/dashboard';

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        id: 1,
        path: '/',
        element: <Home />,
      },
      {
        id: 2,
        path: '/profile',
        element: <Profile />,
      },
      {
        id: 3,
        path: '/messages',
        element: <Messages />,
      },
    ],
  },
  {
    layout: 'auth',
    pages: [
      {
        id: 1,
        path: '/login',
        element: <Login />,
      },
      {
        id: 2,
        path: '/register',
        element: <Register />,
      },
    ],
  },
];
