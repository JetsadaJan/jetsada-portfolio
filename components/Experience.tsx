
import React from 'react';
import { ExperienceItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { experienceData } from '../data/siteData'; // Import bilingual data

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-brand-surface rounded-lg shadow-lg overflow-hidden flex flex-col animate-card border border-transparent 
                   transition-all duration-300 ease-in-out transform 
                   hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
      {/* Image removed */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-brand-text-strong mb-1 font-display">{item.company[language]}</h3>
        <p className="text-sm text-brand-primary mb-4 font-medium">{item.period}</p>
        <div className="space-y-3 flex-grow">
          {item.roles.map((role, index) => (
            <div key={index}>
              <h4 className="font-semibold text-brand-text-strong">{role.title[language]}</h4>
              <p className="text-brand-text text-sm opacity-90 leading-relaxed">{role.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {experienceData.map((item, index) => ( // Using index as key if company names aren't strictly unique
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Experience;