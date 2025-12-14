
import React from 'react';
import SoundwaveIcon from './icons/SoundwaveIcon';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  
  const profileName = language === 'th' ? 'เจษฎา จันทร์ไพจิตร' : 'JETSADA JANPAIJET';

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center p-4 text-center relative">
      <div className="absolute inset-0 bg-brand-bg opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center mt-10 md:mt-0"> {/* Added mt-10 md:mt-0 for spacing */}
        {/* Profile image removed */}
        <h1 className="text-5xl md:text-7xl font-bold text-brand-text-strong font-display uppercase tracking-wider mt-8"> {/* Added mt-8 for spacing */}
          {t('hero_portfolio_title')}
        </h1>
        <div className="hero-soundwave-icon-wrapper my-6 md:my-8">
          <SoundwaveIcon className="w-full max-w-sm h-auto text-brand-primary" animate={true} />
        </div>
        <p className="text-2xl md:text-3xl text-brand-text-strong font-display mb-4">
          {t('hero_job_title')}
        </p>
        <p className="text-xl md:text-2xl text-brand-secondary mb-10 font-display italic">
          {t('hero_period')}
        </p>
        <div className="mt-4 p-4 border-2 border-brand-primary max-w-md text-center rounded-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-text-strong font-display">{profileName}</h2>
            <svg viewBox="0 0 100 30" className="w-24 h-auto mx-auto mt-2 text-brand-primary fill-current hero-signature-svg">
                <path d="M0 15 L5 15 L10 10 L15 20 L20 5 L25 25 L30 15 L35 10 L40 20 L45 15 L50 12 L55 18 L60 15 L65 22 L70 8 L75 15 L80 18 L85 12 L90 15 L95 10 L100 15 L100 17 L95 12 L90 17 L85 14 L80 20 L75 17 L70 10 L65 24 L60 17 L55 20 L50 14 L45 17 L40 22 L35 12 L30 17 L25 27 L20 7 L15 22 L10 12 L5 17 L0 17 Z" />
            </svg>
        </div>
         <a
          href="#about"
          className="mt-12 px-8 py-3 bg-brand-primary text-brand-bg font-semibold rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-lg font-display tracking-wide"
        >
          {t('hero_discover_button')}
        </a>
      </div>
    </section>
  );
};

export default Hero;