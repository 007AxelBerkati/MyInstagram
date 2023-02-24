import React from 'react';
import { SideNav } from '../components';
import { routes } from '../routes';

function Dashboard() {
  return (
    <div className="min-h-screen bg-primary-background">
      <SideNav routes={routes} />
    </div>
  );
}

export default Dashboard;
