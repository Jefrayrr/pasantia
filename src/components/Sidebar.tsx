import React from 'react';
import { Home, FormInput, Table2, BarChart3, FileSpreadsheet, Settings, HelpCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', active: true },
    { icon: <FormInput size={20} />, label: 'Forms', active: false },
    { icon: <FileSpreadsheet size={20} />, label: 'Excel', active: false },
    { icon: <Table2 size={20} />, label: 'Database', active: false },
    { icon: <BarChart3 size={20} />, label: 'Power BI', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ];

  return (
    <aside className="w-16 md:w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden md:inline font-medium text-sm">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-16 md:w-64 p-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
        >
          <HelpCircle size={20} />
          <span className="hidden md:inline text-sm font-medium">Help & Support</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;