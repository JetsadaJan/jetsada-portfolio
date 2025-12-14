
import React from 'react';
import { MailIcon, PhoneIcon } from './icons/GenericIcons'; 
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const email = "Jetsada.janpaijet@gmail.com";
  const phone = "091-8714177";

  return (
    <footer className="bg-brand-surface text-brand-text py-12 border-t-2 border-brand-primary/30">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h3 id="contact" className="text-3xl font-semibold text-brand-text-strong mb-6 font-display">{t('footer_get_in_touch')}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <a href={`mailto:${email}`} className="footer-mail-icon-link flex items-center text-brand-text hover:text-brand-primary transition-colors group">
            <MailIcon className="h-6 w-6 mr-2 text-brand-primary group-hover:text-brand-primary transition-colors footer-mail-icon" />
            <span>{email}</span>
          </a>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="footer-phone-icon-link flex items-center text-brand-text hover:text-brand-primary transition-colors group">
            <PhoneIcon className="h-6 w-6 mr-2 text-brand-primary group-hover:text-brand-primary transition-colors footer-phone-icon" />
            <span>{phone}</span>
          </a>
        </div>
        <p className="text-sm text-brand-text opacity-70">
          &copy; {new Date().getFullYear()} Jetsada Janpaijet. {t('footer_rights_reserved')}
        </p>
        <p className="text-xs text-brand-text opacity-50 mt-2">
          {t('footer_tagline')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;