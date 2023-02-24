import { Home, Messages, Profile } from './pages/dashboard';

export const routes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: 'Profile',
    path: '/profile',
    element: <Profile />,
  },
  {
    id: 3,
    name: 'Messages',
    path: '/messages',
    element: <Messages />,
  },
];
