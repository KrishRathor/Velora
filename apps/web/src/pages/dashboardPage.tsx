import React from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { MainContent } from '../components/dashboard/DashboardLayout';

export const DashboardPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-900 antialiased">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};
