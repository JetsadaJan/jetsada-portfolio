
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon } from './icons/GenericIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { navItemsData } from '../data/siteData'; // Import nav items data

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-surface shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="text-2xl font-bold text-brand-primary font-display tracking-wider">
            JETSADA J.
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navItemsData.map((item) => (
              <a
                key={item.nameKey}
                href={item.href}
                className="text-brand-text hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t(item.nameKey)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-brand-text hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              aria-label={t('toggle_language_aria')}
            >
              {language === 'en' ? 'TH' : 'EN'}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
                onClick={toggleLanguage}
                className="text-brand-text hover:text-brand-primary p-2 mr-2 rounded-md text-sm font-medium transition-colors"
                aria-label={t('toggle_language_aria')}
              >
                {language === 'en' ? 'TH' : 'EN'}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-primary focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <XIcon className="h-6 w-6 navbar-x-icon" /> : <MenuIcon className="h-6 w-6 navbar-menu-icon" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-surface" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItemsData.map((item) => (
              <a
                key={item.nameKey}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-text hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t(item.nameKey)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;