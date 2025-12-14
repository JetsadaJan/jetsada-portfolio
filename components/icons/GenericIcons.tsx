
import React from 'react';
import { IconProps } from '../../types';

// These are basic placeholder SVGs. For a real app, use a library like Heroicons.

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChipIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1h-5m-4 0V1m0 2v2m0-2h4m-4 0H9m4 0V1m0 2v2m-4 4h4m-4 4h4m-4 4h4M9 3v10m6-10v10m6-10v10" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const LanguageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 0v2M3 11h6m-6 4h6m6-4h6m-6 4h6M9 19v2m4-13h6m-6 4h6" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6M21 21v-1a6 6 0 00-6-6" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
  </svg>
);

export const CogIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CollectionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.671a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.829 3.522a1 1 0 00-.364 1.118l1.846 5.671c.3.921-.755 1.688-1.54 1.118l-4.829-3.522a1 1 0 00-1.176 0l-4.829 3.522c-.784.57-1.838-.197-1.539-1.118l1.846-5.671a1 1 0 00-.364-1.118L2.28 11.1c-.783-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69l1.846-5.671z" />
    </svg>
);
export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

// Animated Icons for Section Titles
export const AnimatedBriefcaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-briefcase-icon`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <g className="briefcase-body">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    </g>
    <g className="briefcase-handle">
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> {/* Simplified handle for animation */}
    </g>
     <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"></path>
     <path d="M2 12H.5"></path> {/* Decoration for pulse */}
  </svg>
);

export const AnimatedClapperboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-clapperboard-icon`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="clapper-top">
      <path d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V7h19.99L22 3.5C22 2.67 21.33 2 20.5 2zM11 5L9.5 2.5h-2L6 5H4V3h7v2zM17 5l-1.5-2.5h-2L12 5h-2V3h7v2z"></path>
    </g>
    <path d="M22 8H2v12.5C2 21.33 2.67 22 3.5 22h17c.83 0 1.5-.67 1.5-1.5V8zm-11 11H4v-2h7v2zm0-3H4v-2h7v2zm0-3H4V9h7v2zm9 6h-7v-2h7v2zm0-3h-7v-2h7v2zm0-3h-7V9h7v2z"></path>
  </svg>
);

export const AnimatedMortarboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-mortarboard-icon`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="mortarboard-cap">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 11.59L3.41 9 12 5.41 20.59 9 12 14.59z"></path>
      <path d="M5 13.18v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-4l-7 3.82-7-3.82zM6 17h12v-2.03l-6-3.27-6 3.27V17z"></path>
    </g>
  </svg>
);

export const AnimatedMusicNotesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-music-notes-icon`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="music-note-1">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"></path>
    </g>
    <g className="music-note-2">
      <path d="M20 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z" transform="translate(-5, 2) scale(0.8)"></path>
    </g>
  </svg>
);

export const AnimatedTargetIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-target-icon`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="target-ring-outer">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"></path>
    </g>
    <g className="target-ring-middle">
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z"></path>
    </g>
    <g className="target-dot">
       <circle cx="12" cy="12" r="2"></circle>
    </g>
  </svg>
);


// New Icons for Section Backgrounds and About Subtitle
export const AnimatedUserScanIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-user-scan-icon`} viewBox="0 0 64 64" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="user-scan-body">
      <path d="M32 12C26.4772 12 22 16.4772 22 22C22 27.5228 26.4772 32 32 32C37.5228 32 42 27.5228 42 22C42 16.4772 37.5228 12 32 12Z" strokeWidth="2.5"/>
      <path d="M16 52C16 44.268 23.1797 38 32 38C40.8203 38 48 44.268 48 52H16Z" strokeWidth="2.5"/>
    </g>
    {/* Scan lines group removed */}
  </svg>
);

export const AnimatedBrainLightbulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-brain-lightbulb-icon`} viewBox="0 0 64 64" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g className="lightbulb-animated-part">
      <g className="lightbulb-rays" strokeWidth="2">
          <line x1="32" y1="6" x2="32" y2="2" />
          <line x1="25" y1="9.5" x2="22" y2="7.5" />
          <line x1="39" y1="9.5" x2="42" y2="7.5" />
          <line x1="22.5" y1="16" x2="19" y2="16" />
          <line x1="41.5" y1="16" x2="45" y2="16" />
      </g>
      <path className="bulb-main-part" d="M32 8 C27.5817 8 24 11.5817 24 16 C24 19.866 27.134 23.2761 31 23.9076V26H33V23.9076C36.866 23.2761 40 19.866 40 16C40 11.5817 36.4183 8 32 8Z" fill="currentColor" stroke="currentColor"/>
      <path d="M29 26H35V29H29V26Z" fill="currentColor" stroke="currentColor"/>
    </g>
    <g className="brain-shape-animated-part" transform="translate(0, 5)">
      <path d="M28,30 C22,30 20,35 20,40 C20,45 22,50 28,50" />
      <path d="M36,30 C42,30 44,35 44,40 C44,45 42,50 36,50" />
      <path d="M28,50 C30,52 34,52 36,50" />
      <path d="M28,30 C30,28 34,28 36,30" />
      {/* Squiggly lines */}
      <path d="M25,38 Q28,35 30,38 T36,38" />
      <path d="M26,42 Q29,45 31,42 T37,42" />
      <path d="M24,45 Q27,43 29,45 T35,45" />
    </g>
  </svg>
);


export const AnimatedQuillPenIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={`${className} animated-quill-pen-icon`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g className="quill-main">
      <path d="M19.52 3.07L19.52 3.07c-.9-.9-2.36-.9-3.25 0L4.05 15.29c-.42.42-.66 1-.66 1.59v3.05c0 .55.45 1 1 1h3.05c.59 0 1.17-.24 1.59-.66L19.52 6.32c.9-.9.9-2.35 0-3.25zM5.99 18.01H4.97v-1.02l8.64-8.64 1.02 1.02L5.99 18.01z"></path>
    </g>
    <path className="quill-feather-1" d="M18.82 3.77L15.05 7.54" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path className="quill-feather-2" d="M17.41 2.36L12.92 6.85" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);