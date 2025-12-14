import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedQuillPenIcon } from './icons/GenericIcons'; // New import

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-center">
      {/* Image column removed */}
      <div className="space-y-6 bg-brand-surface p-8 rounded-lg shadow-xl animate-card border border-transparent hover:border-brand-primary/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
        <div className="flex items-center justify-center text-center about-subtitle-wrapper">
          <AnimatedQuillPenIcon className="h-7 w-7 md:h-8 md:w-8 text-brand-primary mr-3 animated-quill-pen-icon" />
          <h3 className="text-3xl font-semibold text-brand-primary font-display">{t('about_section_subtitle')}</h3>
        </div>
        <p className="text-lg leading-relaxed text-brand-text pt-3">{t('about_objective_text')}</p>
        <p className="text-lg leading-relaxed text-brand-text">{t('about_text_1')}</p>
        <p className="text-lg leading-relaxed text-brand-text">{t('about_text_2')}</p>
        <p className="text-lg leading-relaxed text-brand-text">{t('about_text_3')}</p>
      </div>
    </div>
  );
};

export default About;