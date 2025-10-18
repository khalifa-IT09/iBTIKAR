import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center h-20`}>
          <div className="flex items-center">
            <button
              onClick={() => handleScrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              aria-label="iBTIKAR IT SOLUTIONS - Go to Home"
            >
              iBTIKAR IT SOLUTIONS
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollToSection(item)}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-300'
                  }`}
                  aria-label={`Go to ${t(`nav.${item}`)} section`}
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </nav>
            
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
          <nav className="px-4 py-4 space-y-2">
            {['home', 'services', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                aria-label={`Go to ${t(`nav.${item}`)} section`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <div className="px-4 py-2">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
