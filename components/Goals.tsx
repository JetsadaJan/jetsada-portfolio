
import React from 'react';
import { GoalItem } from '../types';
import { CheckCircleIcon, StarIcon } from './icons/GenericIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { goalsData } from '../data/siteData'; // Import bilingual data

const GoalCard: React.FC<{item: GoalItem}> = ({item}) => {
    const { language, t } = useLanguage();
    const IconComponent = item.typeKey === 'short_term' ? CheckCircleIcon : StarIcon;
    const iconClass = item.typeKey === 'short_term' ? 'goal-check-icon' : 'goal-star-icon';
    const animationClass = item.typeKey === 'short_term' ? 'icon-fade-in-only-on-visible' : 'icon-animate-on-visible';

    return (
        <div className="bg-brand-surface p-6 rounded-lg shadow-lg animate-card border border-transparent 
                       transition-all duration-300 ease-in-out 
                       hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
            <div className="flex items-center mb-4 goal-icon-wrapper">
                <IconComponent className={`h-8 w-8 text-brand-primary mr-3 flex-shrink-0 ${iconClass} ${animationClass}`} />
                <h3 className="text-2xl font-semibold text-brand-text-strong font-display">{t(item.typeKey === 'short_term' ? 'goals_short_term_title' : 'goals_long_term_title')}</h3>
            </div>
            <ul className="space-y-2">
            {item.points[language].map((point, index) => (
                <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-brand-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-brand-text leading-relaxed">{point}</span>
                </li>
            ))}
            </ul>
        </div>
    );
}

const Goals: React.FC = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
      {goalsData.map((goalType, index) => ( // Using index as key
        <GoalCard key={index} item={goalType}/>
      ))}
    </div>
  );
};

export default Goals;