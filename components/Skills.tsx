
import React from 'react';
import { SkillCategory } from '../types';
import { ChipIcon, CodeIcon, LanguageIcon, LightBulbIcon, UsersIcon, CogIcon } from './icons/GenericIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { skillsData } from '../data/siteData'; // Import bilingual data

const SkillCard: React.FC<{category: SkillCategory}> = ({ category }) => {
    const { language } = useLanguage();
    let IconComponent;
    let iconTypeClass = '';
    // Icon selection logic can remain based on English title or a fixed key if titles change significantly
    switch (category.title.en) { 
        case 'Musical & Technical Skills': IconComponent = CogIcon; iconTypeClass = 'cog-icon'; break;
        case 'Computer Skills': IconComponent = CodeIcon; iconTypeClass = 'code-icon'; break;
        case 'Professional Attributes': IconComponent = UsersIcon; iconTypeClass = 'users-icon'; break;
        case 'Language Skills': IconComponent = LanguageIcon; iconTypeClass = 'language-icon'; break;
        case 'Artistic Drive & Motivation': IconComponent = LightBulbIcon; iconTypeClass = 'lightbulb-icon'; break;
        default: IconComponent = ChipIcon; iconTypeClass = 'chip-icon';
    }

    return (
        <div className="bg-brand-surface p-6 rounded-lg shadow-lg h-full flex flex-col animate-card border border-transparent 
                       transition-all duration-300 ease-in-out 
                       hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
            <div className="flex items-center mb-4">
                {IconComponent && <IconComponent className={`h-8 w-8 text-brand-primary mr-3 flex-shrink-0 skill-card-icon ${iconTypeClass}`} />}
                <h3 className="text-2xl font-semibold text-brand-text-strong font-display">{category.title[language]}</h3>
            </div>
            <ul className="space-y-3 text-brand-text flex-grow">
            {category.skills.map((skill, index) => (
                <li key={index} className="flex flex-col">
                <span className="font-semibold text-brand-text-strong">
                    {skill.name[language]}
                    {skill.level ? ` (${skill.level[language]})` : ''}
                </span>
                {skill.details && skill.details[language].map((detail, i) => (
                    <p key={i} className="text-sm ml-1 opacity-90 leading-relaxed">{detail}</p>
                ))}
                </li>
            ))}
            </ul>
        </div>
    );
};

const Skills: React.FC = () => {
  // Since skillsData.length is fixed at 5 from siteData.ts, the class can be simplified.
  const gridLayoutClass = "grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3";
  
  return (
    <div className={gridLayoutClass}>
      {skillsData.map((category) => ( // Removed index from key as title.en should be unique enough
         <SkillCard key={category.title.en} category={category} />
      ))}
    </div>
  );
};

export default Skills;