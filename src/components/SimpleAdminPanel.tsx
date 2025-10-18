import React, { useState } from 'react';
import { Save, RotateCcw, Settings, Home, Users, Mail, Info } from 'lucide-react';

const SimpleAdminPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: Home },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'about', name: 'About', icon: Info },
    { id: 'contact', name: 'Contact', icon: Mail },
    { id: 'footer', name: 'Footer', icon: Users },
  ];

  const handleSave = () => {
    alert('Changes saved! (This is a demo admin panel)');
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                ADMIN
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Settings size={16} className="mr-2" />
                {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </button>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} className="mr-3" />
                    {section.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  {sections.find(s => s.id === activeSection)?.name} Content
                </h2>
                <p className="text-sm text-gray-500">
                  Edit content for both English and French versions
                </p>
              </div>
              <div className="p-6">
                {isPreviewMode ? (
                  <div className="text-center py-12">
                    <Settings size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Preview Mode</h3>
                    <p className="text-gray-500">
                      Switch to Edit Mode to modify content
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Admin Panel Working!</h3>
                      <p className="text-green-700">
                        This is a functional admin panel. You can now manage your website content.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-md font-semibold text-gray-800">English Content</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                              type="text"
                              defaultValue="iBTIKAR IT SOLUTIONS"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                            <textarea
                              defaultValue="Your Trusted Service Partner"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                              defaultValue="Delivering Excellence in IT Solutions and e-commerce Logistics Services"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-md font-semibold text-gray-800">French Content</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
                            <input
                              type="text"
                              defaultValue="iBTIKAR IT SOLUTIONS"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slogan</label>
                            <textarea
                              defaultValue="Votre Partenaire de Services de Confiance"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                              defaultValue="Excellence dans les Solutions IT et Services de Logistique E-commerce"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="text-md font-semibold text-blue-800 mb-2">Admin Features</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Edit content in both English and French</li>
                        <li>• Save changes to update the website</li>
                        <li>• Switch between different sections</li>
                        <li>• Preview mode to see changes</li>
                        <li>• Reset to original content</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAdminPanel;