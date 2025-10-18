import React, { useState } from 'react';
import { Settings, Lock, Unlock } from 'lucide-react';

interface SimpleAdminToggleProps {
  onToggleAdmin: () => void;
}

const SimpleAdminToggle: React.FC<SimpleAdminToggleProps> = ({ onToggleAdmin }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAdminAccess, setShowAdminAccess] = useState(false);

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      onToggleAdmin();
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setShowAdminAccess(false);
    window.location.reload();
  };

  // Hidden trigger area - double click to show admin access
  if (!showAdminAccess && !isAuthenticated) {
    return (
      <div 
        className="fixed bottom-0 right-0 w-20 h-20 z-50 cursor-pointer"
        onDoubleClick={() => setShowAdminAccess(true)}
        title="Double-click to access admin"
      >
        {/* Invisible trigger area */}
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Lock size={20} className="text-gray-600 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Admin Access</h3>
            </div>
            <button
              onClick={() => setShowAdminAccess(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col space-y-2">
        <button
          onClick={onToggleAdmin}
          className="flex items-center px-4 py-2 rounded-lg shadow-lg transition-all bg-blue-600 text-white hover:bg-blue-700"
        >
          <Settings size={16} className="mr-2" />
          Admin Panel
        </button>
        
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          <Unlock size={16} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SimpleAdminToggle;
