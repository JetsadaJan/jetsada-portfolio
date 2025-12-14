
export type Language = 'en' | 'th';

export interface BilingualText {
  en: string;
  th: string;
}

export interface BilingualTextArray {
  en: string[];
  th: string[];
}

export interface NavItem {
  nameKey: string; // Key for translation
  href: string;
}

export interface SkillItem {
  name: BilingualText;
  details?: BilingualTextArray;
  level?: BilingualText; // For language skills etc. (e.g., level: { en: 'Advanced', th: 'ขั้นสูง' })
}

export interface SkillCategory {
  title: BilingualText;
  skills: SkillItem[];
}

export interface ExperienceRole {
  title: BilingualText;
  description: BilingualText;
}
export interface ExperienceItem {
  company: BilingualText;
  period: string; // Period usually doesn't need translation or is standard
  roles: ExperienceRole[];
  // image?: string; // Removed as images are being removed from the app
}

export interface EducationItem {
  institution: BilingualText;
  period: string;
  degree: BilingualText;
  details: BilingualTextArray;
  thesis?: BilingualText;
}

export interface ProjectItem {
  id: number;
  title: BilingualText; // Song titles often remain in original language
  description: BilingualText;
  category?: BilingualText;
  soundcloudTrackId?: string; // For embedding SoundCloud player
}

export interface NotableWorkItem {
  id: string;
  role: BilingualText; // Job titles often remain in English
  title: BilingualText; // Media titles often remain in original language
  projectDescription?: BilingualText; // Additional description for the work
  youtubeLink: string;
  youtubeVideoId: string;
  // thumbnailUrl: string; // Removed as it's not used and images are being removed
  startTime?: number;
  startTimeFormatted?: string;
}

export interface GoalItem {
  typeKey: 'short_term' | 'long_term'; // To be translated using a key
  points: BilingualTextArray;
}

export interface IconProps {
  className?: string;
}