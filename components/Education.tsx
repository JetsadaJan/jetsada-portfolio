
import React from 'react';
import { EducationItem } from '../types';
import { AcademicCapIcon } from './icons/GenericIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { educationData } from '../data/siteData'; // Import bilingual data

const EducationCard: React.FC<{item: EducationItem}> = ({ item }) => {
    const { language } = useLanguage();
    return (
        <div className="bg-brand-secondary text-brand-card-text p-6 rounded-lg shadow-lg animate-card border border-transparent 
                       transition-all duration-300 ease-in-out 
                       hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-secondary-hover hover:scale-105">
            <div className="flex items-start mb-3">
                <div className="education-cap-icon-wrapper mr-4 mt-1 flex-shrink-0">
                    <AcademicCapIcon className="h-10 w-10 text-brand-primary education-cap-icon" />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-brand-card-text font-display">{item.institution[language]}</h3>
                    <p className="text-sm text-brand-primary mb-1 font-medium">{item.period}</p>
                </div>
            </div>
            <p className="font-medium text-brand-card-text mb-2 text-lg">{item.degree[language]}</p>
            {item.details[language].map((detail, index) => (
                <p key={index} className="text-sm text-brand-card-text opacity-90 mb-1 ml-4 ">{detail}</p>
            ))}
            {item.thesis && <p className="text-sm text-brand-card-text opacity-90 mt-2 italic"> 
                <span className="font-semibold">{language === 'th' ? 'วิทยานิพนธ์:' : 'Thesis:'}</span> {item.thesis[language]}
            </p>}
        </div>
    );
};

const Education: React.FC = () => {
  return (
    <div className="space-y-8">
      {educationData.map((item, index) => ( // Using index as key
        <EducationCard key={index} item={item}/>
      ))}
    </div>
  );
};

export default Education;