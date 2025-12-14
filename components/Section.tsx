
import React, { forwardRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  AnimatedBriefcaseIcon, 
  AnimatedClapperboardIcon, 
  AnimatedMortarboardIcon, 
  AnimatedMusicNotesIcon, 
  AnimatedTargetIcon,
  AnimatedUserScanIcon,
  AnimatedBrainLightbulbIcon
} from './icons/GenericIcons';

type BackgroundIconType = 'user-scan' | 'brain-lightbulb';

interface SectionProps {
  id: string;
  titleKey: string; 
  children: React.ReactNode;
  className?: string;
  backgroundIconType?: BackgroundIconType;
  style?: React.CSSProperties; // Added style prop
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, titleKey, children, className = '', backgroundIconType, style }, ref) => {
  const { t } = useLanguage();

  const sideIconProps = { className: `h-8 w-8 md:h-10 md:w-10 text-brand-primary icon-animate-on-visible` };

  const getSideAnimatedIcon = () => {
    switch (id) {
      case 'about': return <AnimatedUserScanIcon {...sideIconProps} />;
      case 'skills': return <AnimatedBrainLightbulbIcon {...sideIconProps} />;
      case 'experience': return <AnimatedBriefcaseIcon {...sideIconProps} />;
      case 'notable-work': return <AnimatedClapperboardIcon {...sideIconProps} />;
      case 'education': return <AnimatedMortarboardIcon {...sideIconProps} />;
      case 'projects': return <AnimatedMusicNotesIcon {...sideIconProps} />;
      case 'goals': return <AnimatedTargetIcon {...sideIconProps} />;
      default: return null;
    }
  };

  const sideIcon = getSideAnimatedIcon();

  const renderBackgroundAnimatedIcon = () => {
    if (!backgroundIconType) return null;
    const iconProps = { className: `h-24 w-24 md:h-32 md:w-32 text-brand-primary`}; 
    
    switch (backgroundIconType) {
      case 'user-scan': return <AnimatedUserScanIcon {...iconProps} />;
      case 'brain-lightbulb': return <AnimatedBrainLightbulbIcon {...iconProps} />;
      default: return null;
    }
  };

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-32 md:py-48 dynamic-scroll-section ${className}`} // Increased padding and added dynamic-scroll-section class
      style={style} // Apply dynamic styles
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center mb-12 md:mb-16 relative">
          {backgroundIconType && (
            <div className="section-title-background-icon-wrapper">
              {renderBackgroundAnimatedIcon()}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-text-strong font-display uppercase section-title-underline">
            {t(titleKey)}
          </h2>
          {sideIcon && (
             <span className="ml-3 md:ml-4 section-title-icon-wrapper">
                {sideIcon}
             </span>
            )
          }
        </div>
        {children}
      </div>
    </section>
  );
});

export default Section;
