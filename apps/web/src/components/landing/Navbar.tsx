import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Brand Name */}
        <a href="/" className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          ByteGrid
        </a>

        {/* Auth & Dashboard Button */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <a href="/dashboard" className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Go to Dashboard
            </a>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-white transition duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Sign In / Get Started
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
