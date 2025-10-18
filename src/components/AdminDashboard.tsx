import React, { useState } from 'react';
import { Save, RotateCcw, Eye, EyeOff, Settings, Home, Users, Mail, Info } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { useLanguage } from '../contexts/LanguageContext';

const AdminDashboard: React.FC = () => {
  const { content, updateContent, saveChanges, resetChanges, hasUnsavedChanges } = useAdmin();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: Home },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'about', name: 'About', icon: Info },
    { id: 'contact', name: 'Contact', icon: Mail },
    { id: 'footer', name: 'Footer', icon: Users },
  ];

  const renderContentEditor = (sectionKey: string, sectionData: any) => {
    if (!sectionData) return null;

    const renderField = (key: string, field: any, path: string) => {
      if (field && typeof field === 'object' && 'en' in field && 'fr' in field) {
        return (
          <div key={key} className="mb-6 p-4 border border-gray-200 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">English</label>
                <textarea
                  value={field.en}
                  onChange={(e) => updateContent(path, e.target.value, field.fr)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">French</label>
                <textarea
                  value={field.fr}
                  onChange={(e) => updateContent(path, field.en, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );
      } else if (Array.isArray(field)) {
        return (
          <div key={key} className="mb-6 p-4 border border-gray-200 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            {field.map((item, index) => (
              <div key={index} className="mb-4 p-3 bg-gray-50 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">English</label>
                    <textarea
                      value={item.en}
                      onChange={(e) => updateContent(`${path}.${index}`, e.target.value, item.fr)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">French</label>
                    <textarea
                      value={item.fr}
                      onChange={(e) => updateContent(`${path}.${index}`, item.en, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      } else if (typeof field === 'object') {
        return (
          <div key={key} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </h3>
            {Object.entries(field).map(([subKey, subField]) => 
              renderField(subKey, subField, `${path}.${subKey}`)
            )}
          </div>
        );
      }
      return null;
    };

    return (
      <div className="space-y-6">
        {Object.entries(sectionData).map(([key, field]) => 
          renderField(key, field, `${sectionKey}.${key}`)
        )}
      </div>
    );
  };

  const getCurrentSectionData = () => {
    switch (activeSection) {
      case 'hero':
        return content.hero;
      case 'services':
        return content.services;
      case 'about':
        return content.about;
      case 'contact':
        return content.contact;
      case 'footer':
        return content.footer;
      default:
        return null;
    }
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
                {language.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {isPreviewMode ? <EyeOff size={16} className="mr-2" /> : <Eye size={16} className="mr-2" />}
                {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
              <button
                onClick={resetChanges}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </button>
              <button
                onClick={saveChanges}
                disabled={!hasUnsavedChanges}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <Eye size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Preview Mode</h3>
                    <p className="text-gray-500">
                      Switch to Edit Mode to modify content
                    </p>
                  </div>
                ) : (
                  renderContentEditor(activeSection, getCurrentSectionData())
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
