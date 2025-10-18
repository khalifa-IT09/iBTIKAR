import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-colors duration-200 text-sm font-medium text-white border border-white/20"
        aria-label={`Current language: ${currentLanguage.label}. Click to change language.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-xs font-semibold">{currentLanguage.label}</span>
        {isOpen ? (
          <ChevronUp size={14} className="text-white/70" />
        ) : (
          <ChevronDown size={14} className="text-white/70" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[120px]">
          <div className="py-1" role="listbox">
            {languages
              .filter((lang) => lang.code !== language) // Exclude currently selected language
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
                  role="option"
                  aria-selected={false}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-semibold text-gray-700">{lang.label}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
