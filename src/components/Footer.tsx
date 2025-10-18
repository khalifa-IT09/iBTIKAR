import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { scrollToSection } = useScrollToSection();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              {t('footer.companyName')}
            </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {t('footer.description')}
                </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@ibtikar.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+222 22 09 09 32</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{t('footer.globalOffices')}</span>
              </li>
            </ul>
          </div>
        </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} {t('footer.companyName')}. {t('footer.copyright')}</p>
            </div>
      </div>
    </footer>
  );
}
