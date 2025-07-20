import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, Info, Recycle } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/classify', label: 'Classify', icon: Camera },
    { path: '/about', label: 'About Us', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-gray-800">Snap Bin</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;