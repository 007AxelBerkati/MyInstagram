export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/messages',
        name: 'Messages',
        component: Messages,
      },
    ],
  },
];
