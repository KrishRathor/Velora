import React, { useEffect } from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { MainContent } from '../components/dashboard/DashboardLayout';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export const DashboardPage: React.FC = () => {

  const navigate = useNavigate();

  const { user, isLoaded } = useUser(); 

  useEffect(() => {
    if (isLoaded && !user) {
      navigate("/");
    }
  }, [isLoaded, user, navigate]);

  return (
    <div className="h-screen flex flex-col bg-gray-900 antialiased">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};
