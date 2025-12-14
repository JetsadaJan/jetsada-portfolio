
import React from 'react';
import { ProjectItem } from '../types';
import { CollectionIcon, LinkIcon } from './icons/GenericIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData, soundcloudLinkBase } from '../data/siteData'; // Import bilingual data

const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(soundcloudLinkBase)}&bgcolor=F5F5DC&color=232931&qzone=1`;

const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none'; // Hide image if it fails to load
    // Optionally, display a fallback message or element
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-2/3 space-y-6"> {/* Increased space-y for iframe */}
            {projectsData.map((project) => (
            <div key={project.id} className="bg-brand-surface p-4 rounded-lg shadow-lg animate-card border border-transparent 
                                           transition-all duration-300 ease-in-out 
                                           hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
                <div className="flex items-center mb-2 project-collection-icon-wrapper">
                    <CollectionIcon className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 project-collection-icon icon-fade-in-only-on-visible" />
                    <div>
                        <h3 className="text-lg font-semibold text-brand-text-strong font-display tracking-normal">{project.title[language]}</h3>
                        <p className="text-sm text-brand-text opacity-80">{project.description[language]}</p>
                    </div>
                </div>
                {project.soundcloudTrackId && (
                  <div className="mt-3">
                    <iframe 
                      width="100%" 
                      height="140"  // Adjusted height for a more compact player
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${project.soundcloudTrackId}&color=393E46&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false&dark=true`} // Changed color to 393E46 (brand-surface)
                      className="rounded-md"
                      title={`${project.title[language]} - SoundCloud Player`}
                    ></iframe>
                  </div>
                )}
            </div>
            ))}
        </div>
        <div className="lg:w-1/3 lg:sticky lg:top-24 bg-brand-secondary text-brand-card-text p-6 rounded-lg shadow-xl text-center animate-card border border-transparent 
                       transition-all duration-300 ease-in-out 
                       hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-secondary-hover hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-brand-card-text font-display">{t('projects_scan_qr_title')}</h3>
            <img
              src={qrCodeImageUrl}
              alt={t('projects_qr_alt')}
              className="mx-auto my-4 rounded-lg shadow-md w-40 h-40 md:w-48 md:h-48 object-contain"
              onError={handleImageError}
            />
            <a
            href={soundcloudLinkBase}
            target="_blank"
            rel="noopener noreferrer"
            className="project-qr-link inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-brand-bg font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md font-display tracking-wide mt-4" // Added mt-4 for spacing after QR
            >
            <LinkIcon className="h-5 w-5 mr-2 project-link-icon" />
            {t('projects_soundcloud_button')}
            </a>
            <p className="text-xs mt-4 text-brand-card-text opacity-70 break-all">
                ( {soundcloudLinkBase} )
            </p>
        </div>
    </div>
  );
};

export default Projects;
