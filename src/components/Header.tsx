import React from 'react';
import { Layout, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Layout className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">Microsoft Workflow Automation</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">
              <User className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:inline">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;