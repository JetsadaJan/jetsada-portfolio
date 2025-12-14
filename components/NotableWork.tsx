
import React from 'react';
import { NotableWorkItem } from '../types';
// YouTubeIcon is no longer directly used on hover for the player, but keeping it for other potential uses or if siteData schema changes.
// import { YouTubeIcon } from './icons/GenericIcons'; 
import { useLanguage } from '../contexts/LanguageContext';
import { notableWorkData } from '../data/siteData'; // Import bilingual data

const NotableWorkCard: React.FC<{ item: NotableWorkItem }> = ({ item }) => {
  const { language, t } = useLanguage();
  
  const videoSrc = `https://www.youtube.com/embed/${item.youtubeVideoId}${item.startTime ? `?start=${item.startTime}` : ''}`;

  return (
    <div className="bg-brand-surface rounded-lg shadow-lg overflow-hidden flex flex-col animate-card border border-transparent 
                   transition-all duration-300 ease-in-out 
                   hover:border-brand-primary/50 hover:shadow-2xl hover:bg-brand-surface-hover hover:scale-105">
      {item.youtubeVideoId ? (
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={videoSrc}
            title={`${item.title[language]} - YouTube video player`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-t-lg"
          ></iframe>
        </div>
      ) : (
        <div className="w-full h-52 bg-brand-bg flex items-center justify-center text-brand-text opacity-50 rounded-t-lg">
          {t('notable_work_video_unavailable', { title: item.title[language] })}
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-brand-primary mb-1 font-semibold font-display tracking-wide uppercase">{item.role[language]}</p>
        <h3 className="text-xl font-semibold text-brand-text-strong mb-2 font-display">
          <a href={item.youtubeLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
            {item.title[language]}
          </a>
        </h3>
        {item.projectDescription && (
          <p className="text-brand-text text-sm opacity-90 mb-3 leading-relaxed">{item.projectDescription[language]}</p>
        )}
        {item.startTimeFormatted && (
          <p className="text-xs text-brand-text opacity-70 mt-auto">
            ({t('notable_work_start_time_prefix')} {item.startTimeFormatted})
          </p>
        )}
      </div>
    </div>
  );
};

const NotableWork: React.FC = () => {
  const { t } = useLanguage(); // For fallback text

  if (!notableWorkData.length) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {notableWorkData.map((item) => (
        <NotableWorkCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NotableWork;