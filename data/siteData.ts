
import { NavItem, SkillCategory, ExperienceItem, EducationItem, ProjectItem, GoalItem, NotableWorkItem } from '../types';

export const navItemsData: NavItem[] = [
  { nameKey: 'nav_home', href: '#hero' },
  { nameKey: 'nav_about', href: '#about' },
  { nameKey: 'nav_education', href: '#education' },
  { nameKey: 'nav_skills', href: '#skills' },
  { nameKey: 'nav_experience', href: '#experience' },
  { nameKey: 'nav_notable_work', href: '#notable-work' },
  { nameKey: 'nav_projects', href: '#projects' },
  { nameKey: 'nav_goals', href: '#goals' },
];

export const skillsData: SkillCategory[] = [
  {
    title: { en: 'Musical & Technical Skills', th: 'Musical & Technical Skills' },
    skills: [
      { name: { en: 'Composition & Arrangement', th: 'Composition & Arrangement' }, details: { en: ['Orchestral, electronic, and contemporary styles. Scoring for various ensembles.'], th: ['สไตล์ออร์เคสตรา, อิเล็กทรอนิกส์ และร่วมสมัย การทำสกอร์สำหรับวงดนตรีหลากหลายรูปแบบ'] } },
      { name: { en: 'Digital Audio Workstations (DAWs)', th: 'Digital Audio Workstations (DAWs)' }, details: { en: ['Proficient in Ableton Live, FL Studio, Logic Pro, Studio One for composition and production.'], th: ['เชี่ยวชาญ Ableton Live, FL Studio, Logic Pro, Studio One สำหรับการแต่งเพลงและโปรดักชัน'] } },
      { name: { en: 'Sound Processing & Mixing', th: 'Sound Processing & Mixing' }, details: { en: ['Compression, EQ, reverb, delay, mid/side mixing, phase correlation, mastering for compositional clarity.'], th: ['Compression, EQ, reverb, delay, mid/side mixing, phase correlation, mastering เพื่อความชัดเจนขององค์ประกอบเพลง'] } },
      { name: { en: 'Music Theory & Harmony', th: 'Music Theory & Harmony' }, details: { en: ['Advanced understanding of harmony, counterpoint, form, and orchestration.'], th: ['ความเข้าใจขั้นสูงเกี่ยวกับ harmony, counterpoint, form และ orchestration'] } },
      { name: { en: 'MIDI Programming & Sound Design', th: 'MIDI Programming & Sound Design' }, details: { en: ['Creating custom sounds, virtual instrument programming.'], th: ['การสร้างเสียงเฉพาะ, การโปรแกรม virtual instrument'] } },
      { name: { en: 'Surround Sound Composition', th: 'Surround Sound Composition' }, details: { en: ['Experience with 5.1, 7.1, Dolby Atmos for immersive audio projects.'], th: ['ประสบการณ์กับ 5.1, 7.1, Dolby Atmos สำหรับโปรเจกต์เสียงรอบทิศทาง'] } },
    ],
  },
  {
    title: { en: 'Computer Skills', th: 'Computer Skills' },
    skills: [
      { 
        name: { en: 'Programming', th: 'Programming' }, 
        details: { 
          en: ['Python (Basic for scripting audio batch processes, e.g., file renaming or metadata tagging), C/C++ (Good for understanding audio plugin architecture and real-time audio processing concepts).'], 
          th: ['Python (พื้นฐานสำหรับเขียนสคริปต์จัดการไฟล์เสียงจำนวนมาก เช่น การเปลี่ยนชื่อไฟล์หรือการติดแท็ก metadata), C/C++ (ดีสำหรับความเข้าใจสถาปัตยกรรม audio plugin และแนวคิดการประมวลผลเสียงแบบ real-time)'] 
        } 
      },
      { name: { en: 'Resource Management', th: 'Resource Management' }, details: { en: ['Efficient workflow and project timeline optimisation for composition projects.'], th: ['การจัดการ workflow และ project timeline ที่มีประสิทธิภาพสำหรับโปรเจกต์แต่งเพลง'] } },
    ],
  },
  {
    title: { en: 'Professional Attributes', th: 'Professional Attributes' },
    skills: [
      { name: { en: 'Communication', th: 'Communication' }, details: { en: ['Effectively articulating creative ideas and collaborating with directors, musicians, and clients.'], th: ['สื่อสารแนวคิดสร้างสรรค์และทำงานร่วมกับผู้กำกับ, นักดนตรี และลูกค้าได้อย่างมีประสิทธิภาพ'] } },
      { name: { en: 'Teamwork & Collaboration', th: 'Teamwork & Collaboration' }, details: { en: ['Working with ensembles, sound designers, and production teams.'], th: ['ทำงานร่วมกับวงดนตรี, sound designers และทีมโปรดักชัน'] } },
      { name: { en: 'Creativity & Innovation', th: 'Creativity & Innovation' }, details: { en: ['Bringing unique musical perspectives to projects, problem-solving in composition.'], th: ['นำเสนอมุมมองทางดนตรีที่ไม่เหมือนใครในโปรเจกต์, การแก้ปัญหาในการแต่งเพลง'] } },
      { name: { en: 'Working Under Pressure', th: 'Working Under Pressure' }, details: { en: ['Meeting deadlines for film scores, game soundtracks, or performance pieces.'], th: ['ทำงานภายใต้กำหนดเวลาสำหรับ film scores, game soundtracks หรืองานแสดง'] } },
      { name: { en: 'Emotional Intelligence', th: 'Emotional Intelligence' }, details: { en: ['Understanding project briefs, interpreting artistic direction, collaborating sensitively.'], th: ['เข้าใจ project briefs, ตีความ artistic direction, ทำงานร่วมกันอย่างเข้าอกเข้าใจ'] } },
      { name: { en: 'Critical Thinking & Analysis', th: 'Critical Thinking & Analysis' }, details: { en: ['Deconstructing musical ideas, analysing scores, making informed compositional choices.'], th: ['แยกแยะแนวคิดทางดนตรี, วิเคราะห์ scores, ตัดสินใจเลือกองค์ประกอบเพลงอย่างมีข้อมูล'] } },
    ],
  },
  {
    title: { en: 'Language Skills', th: 'Language Skills' },
    skills: [
      { name: { en: 'English', th: 'ภาษาอังกฤษ' }, level: { en: 'Advanced', th: 'ขั้นสูง' } },
      { name: { en: 'Thai', th: 'ภาษาไทย' }, level: { en: 'Native', th: 'ภาษาแม่' } },
    ],
  },
  {
      title: { en: 'Artistic Drive & Motivation', th: 'Artistic Drive & Motivation' },
      skills: [
          { name: { en: 'Challenge Driven', th: 'Challenge Driven' }, details: { en: ['Passionate about complex compositional challenges and pushing creative boundaries in music.'], th: ['มีความมุ่งมั่นในการเผชิญหน้ากับความท้าทายในการแต่งเพลงที่ซับซ้อน และผลักดันขอบเขตความคิดสร้างสรรค์ในดนตรี'] } },
          { name: { en: 'Dedicated Learner', th: 'Dedicated Learner' }, details: { en: ['Continuously studying new musical styles, techniques, and technologies.'], th: ['ศึกษาดนตรีสไตล์ใหม่ๆ, เทคนิค และเทคโนโลยีอย่างต่อเนื่อง'] } },
      ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: { en: 'Thammasat University Band (TU Band)', th: 'Thammasat University Band (TU Band)' },
    period: '2561 - 2563',
    roles: [
      { title: { en: 'Musician (Guitarist)', th: 'นักดนตรี (มือกีต้าร์)' }, description: { en: 'Performed as a guitarist, contributing to band repertoire and live shows.', th: 'มีส่วนร่วมในการคิดโชว์เพลงและแสดงคอนเสิร์ต' } },
      { 
        title: { en: 'Leader of Show Director', th: 'Leader of Show Director' }, 
        description: { 
          en: 'Led artistic direction for major club concerts, successfully coordinating with sound engineering teams to deliver impactful live sound experiences.', 
          th: 'เป็นผู้นำด้าน artistic direction สำหรับคอนเสิร์ตใหญ่ของชมรม ประสานงานกับทีม sound engineers' 
        } 
      },
    ],
  },
  {
    company: { en: 'Allied Health Science Band TU (AHS Band TU)', th: 'Allied Health Science Band TU (AHS Band TU)' },
    period: '2563 - 2565',
    roles: [
      { title: { en: 'Coordinator & Sound Engineer', th: 'Coordinator & Sound Engineer' }, description: { en: 'Monitored sound requirements and liaised with engineers during events to ensure musical integrity.', th: 'ดูแลและประสานงานกับทีม sound engineers ระหว่างงานอีเวนต์เพื่อควบคุมคุณภาพงานดนตรี' } },
      { title: { en: 'Musical Advisor', th: 'Musical Advisor' }, description: { en: 'Provided guidance on musical arrangements, performance practice, and sound checking.', th: 'ให้คำแนะนำเกี่ยวกับการเรียบเรียงดนตรี การฝึกซ้อม และการซาวด์เช็ค' } },
    ],
  },
  {
    company: { en: 'Duo band: Mayjin', th: 'Duo band: Mayjin' },
    period: '2562 - ปัจจุบัน',
    roles: [
      { title: { en: 'Composer & Arranger', th: 'Composer & Arranger' }, description: { en: 'Developed original compositions, arranged cover songs, and handled song writing duties for the duo.', th: 'แต่งเพลง เขียนเพลง และทำเพลงคัพเวอร์' } },
    ],
  },
  {
    company: { en: 'B the brothers Band', th: 'B the brothers Band' },
    period: '2566 - 2567',
    roles: [
      { title: { en: 'Recording Advisor', th: 'Recording Advisor' }, description: { en: 'Offered musical and technical advice during the recording process for their demo.', th: 'ให้คำแนะนำด้านดนตรีและเทคนิคระหว่างกระบวนการอัดเสียงสำหรับการทำเดโม่เพลงของวง' } },
      { 
        title: { en: 'Sound Engineering (Demo)', th: 'Sound Engineering (Demo)' }, 
        description: { 
          en: 'Engineered and mixed the pre-debut demo for B the brothers Band, enhancing compositional impact and clarity, which helped the band present a polished sound.', 
          th: 'ทำดนตรีและ mix & mastering ก่อนเดบิวต์ให้กับวง B the brothers เพื่อให้ดนตรีของวงให้สมบูรณ์' 
        } 
      },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: { en: 'University of Nottingham, United Kingdom', th: 'University of Nottingham, สหราชอาณาจักร' },
    period: '2021 - 2023',
    degree: { en: 'Bachelor of Science in Electronics and Computer Engineering (Third Class Honours)', th: 'วิทยาศาสตรบัณฑิต สาขาวิศวกรรมอิเล็กทรอนิกส์และคอมพิวเตอร์ (เกียรตินิยมอันดับสาม)' },
    details: { 
      en: [
        'Relevant Courses for Composition: The Aesthetic of Music (optional), Scalable Cross-Platform Software Design (for audio tools), Analogue Electronics (for hardware understanding).',
        'Other Courses: IT Infrastructure and Cybersecurity, Electronic Processing and Communications.',
      ],
      th: [
        'รายวิชาที่เกี่ยวข้องกับการแต่งเพลง: The Aesthetic of Music (วิชาเลือก), Scalable Cross-Platform Software Design (สำหรับเครื่องมือเสียง), Analogue Electronics (เพื่อความเข้าใจฮาร์ดแวร์)',
        'รายวิชาอื่นๆ: IT Infrastructure and Cybersecurity, Electronic Processing and Communications',
      ]
    },
    thesis: { en: 'Thesis: "Development of Multi-Frequency Patch Antenna for WiFi Receivers at 2.4 and 5.0 GHz" - Explored signal processing principles applicable to audio.', th: 'วิทยานิพนธ์: "การพัฒนาสายอากาศแพตช์หลายความถี่สำหรับเครื่องรับ WiFi ที่ 2.4 และ 5.0 GHz" - ศึกษาหลักการประมวลผลสัญญาณที่ประยุกต์ใช้กับเสียงได้' }
  },
  {
    institution: { en: 'Thammasat University, Thailand (Rangsit Campus)', th: 'มหาวิทยาลัยธรรมศาสตร์(ศูนย์รังสิต), ประเทศไทย' },
    period: '2018 - 2020',
    degree: { en: 'Transferred - Initial studies in Engineering', th: 'หลักสูตรเทียบโอน - ศึกษาเบื้องต้นในสาขาวิศวกรรมศาสตร์' },
    details: {
      en: [
        'Focus on Electronic Processing and Communications: Foundational knowledge in software and signal processing relevant to music technology.',
      ],
      th: [
        'เน้นด้าน Electronic Processing and Communications: ความรู้พื้นฐานด้านซอฟต์แวร์และการประมวลผลสัญญาณที่เกี่ยวข้องกับเทคโนโลยีดนตรี',
      ]
    },
  },
];

export const soundcloudLinkBase = "https://soundcloud.com/jetsada-janpaijet/sets/port?si=88642c6bfee34143ac3d1034d429320c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"; // Updated link

export const projectsData: ProjectItem[] = [
    { 
      id: 1, 
      title: { en: "ใจดื้อ - NAP A LEAN Cover By Jay & ชิบะซัง", th: "ใจดื้อ - NAP A LEAN Cover By Jay & ชิบะซัง" }, 
      description: { en: 'Arrangement by Jayjetsada & Shibasan', th: 'เรียบเรียงโดย Jayjetsada & Shibasan' },
      soundcloudTrackId: '1727232000'
    },
    { 
      id: 2, 
      title: { en: "I Dont Love You - My Chemical Romance Cover By Jay Jetsada & ชิบะซัง", th: "I Dont Love You - My Chemical Romance Cover By Jay Jetsada & ชิบะซัง" }, 
      description: { en: 'Arrangement by Jay Jetsada & Shibasan', th: 'เรียบเรียงโดย Jay Jetsada & Shibasan' },
      soundcloudTrackId: '1727235615'
    },
    { 
      id: 3, 
      title: { en: "This Is Home Cover by Jay Jetsada", th: "This Is Home Cover by Jay Jetsada" }, 
      description: { en: 'Arrangement by Jay Jetsada', th: 'เรียบเรียงโดย Jay Jetsada' },
      soundcloudTrackId: '1727203992' 
    },
    { 
      id: 4, 
      title: { en: "Modern Rock Song", th: "Modern Rock Song" }, 
      description: { 
          en: 'Instrumental Composition Demo. Inspired by contemporary rock bands, this piece explores intense dynamic shifts and intricate guitar riffs to create a powerful, driving energy. Focus was on building tension and release through instrumental layering.', 
          th: 'Demo เพลงบรรเลง ได้รับแรงบันดาลใจจากวงร็อกร่วมสมัย ชิ้นงานนี้สำรวจการเปลี่ยนแปลงไดนามิกที่เข้มข้นและริฟฟ์กีตาร์ที่ซับซ้อนเพื่อสร้างพลังงานที่หนักแน่นและขับเคลื่อน เน้นการสร้างความตึงเครียดและการปลดปล่อยผ่านการซ้อนชั้นของเครื่องดนตรี' 
      },
      soundcloudTrackId: '1727172603' 
    },
    { 
      id: 5, 
      title: { en: "Short Orchestra Opening", th: "Short Orchestra Opening" }, 
      description: { 
          en: 'A brief, majestic orchestral piece conceived as an opening for a cinematic project or event. The composition aims to evoke a sense of grandeur and anticipation using traditional orchestral voicings and a heroic theme.', 
          th: 'เพลงออร์เคสตราสั้นๆ ที่สง่างาม สร้างสรรค์ขึ้นเพื่อใช้เป็นเพลงเปิดสำหรับโปรเจกต์ภาพยนตร์หรืองานอีเวนต์ องค์ประกอบเพลงนี้มีจุดมุ่งหมายเพื่อปลุกความรู้สึกยิ่งใหญ่และความคาดหวังโดยใช้เสียงประสานออร์เคสตราแบบดั้งเดิมและธีมที่กล้าหาญ' 
      },
      soundcloudTrackId: '1727175540'
    },
    { 
      id: 6, 
      title: { en: "[Cover] The 1975 - All I Need To Hear (cover by Mimix_min)", th: "[Cover] The 1975 - All I Need To Hear (cover by Mimix_min)" }, 
      description: { en: 'Arrangement by Mimix_Min, Co-produced by Jetsada', th: 'เรียบเรียงโดย Mimix_Min, Co-produced โดย Jetsada' },
      soundcloudTrackId: '1727242083'
    },
    { 
      id: 7, 
      title: { en: "[Cover] เพลงของเรา | Our Song -TATTOO COLOUR (cover by Mimix_min)", th: "[Cover] เพลงของเรา | Our Song -TATTOO COLOUR (cover by Mimix_min)" }, 
      description: { en: 'Arrangement by Mimix_Min, Co-produced by Jetsada', th: 'เรียบเรียงโดย Mimix_Min, Co-produced โดย Jetsada' },
      soundcloudTrackId: '1727247096'
    },
    { 
      id: 8, 
      title: { en: "Liar - Mayjin (Incomplete)", th: "Liar - Mayjin (Incomplete)" }, 
      description: { en: 'Work in Progress, Songwriting & Arrangement', th: 'กำลังดำเนินการ, แต่งและเรียบเรียง' },
      soundcloudTrackId: '1727104341'
    },
    { 
      id: 9, 
      title: { en: "Champagne Supernova - Mayjin (Live Session)", th: "Champagne Supernova - Mayjin (Live Session)" }, 
      description: { en: 'Live Arrangement and Performance. This acoustic arrangement focuses on vocal harmonies and a stripped-back feel.', th: 'เรียบเรียงและแสดงสด การเรียบเรียงอะคูสติกนี้เน้นเสียงประสานและให้ความรู้สึกเรียบง่าย' },
      soundcloudTrackId: '1727117250' 
    },
    { 
      id: 10, 
      title: { en: "Somewhere Only We Know - Mayjin", th: "Somewhere Only We Know - Mayjin" }, 
      description: { en: 'Re-harmonization and Arrangement', th: 'Re-harmonization และเรียบเรียง' },
      soundcloudTrackId: '1726970550'
    },
    { 
      id: 11, 
      title: { en: "Winter Wonderland - Jazz Qiuntet(Short)", th: "Winter Wonderland - Jazz Qiuntet(Short)" }, 
      description: { en: 'Short Jazz Quintet Piece', th: 'เพลง Jazz Quintet สั้นๆ' },
      soundcloudTrackId: '1727093721'
    },
    { 
      id: 12, 
      title: { en: "โอ้ย โอ้ย", th: "โอ้ย โอ้ย" }, 
      description: { en: 'Co-written and Arranged Piece', th: 'แต่งและเรียบเรียงร่วมกัน' },
      soundcloudTrackId: '1726921890'
    },
    { 
      id: 13, 
      title: { en: "BTB Demo", th: "BTB Demo" }, 
      description: { en: 'Produced and Arranged Band Demo', th: 'โปรดิวซ์และเรียบเรียง Band Demo' },
      soundcloudTrackId: '1726962117'
    },
    { 
      id: 14, 
      title: { en: "Kodaline And The 1975 Style Concept Song", th: "Kodaline And The 1975 Style Concept Song" }, 
      description: { en: "A concept song exploring the styles of Kodaline and The 1975.", th: "เพลงคอนเซ็ปต์ที่ผสมผสานสไตล์ของ Kodaline และ The 1975" },
      soundcloudTrackId: '1856394417'
    },
    { 
      id: 15, 
      title: { en: "Pob Rak Live Session", th: "พบรัก Live Session" }, 
      description: { en: "Live session recording of 'Pob Rak'.", th: "บันทึกการแสดงสดเพลง 'พบรัก'" },
      soundcloudTrackId: '1856389245'
    },
    { 
      id: 16, 
      title: { en: "Song For Sleeping Sample", th: "Song For Sleeping Sample" }, 
      description: { en: "A sample track designed for relaxation and sleep.", th: "ตัวอย่างเพลงที่ออกแบบมาเพื่อการผ่อนคลายและการนอนหลับ" },
      soundcloudTrackId: '1856389230'
    },
];

const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const getYouTubeStartTime = (url: string): number | undefined => {
  try {
    const urlObj = new URL(url);
    const timeParam = urlObj.searchParams.get('t');
    if (timeParam) {
      return parseInt(timeParam.replace('s', ''), 10);
    }
  } catch (e) { /* Invalid URL */ }
  return undefined;
};

const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

interface NotableWorkRawItem {
  role: { en: string; th: string };
  title: { en: string; th: string };
  projectDescription?: { en: string; th: string };
  youtubeLink: string;
  startTime?: number;
}

const notableWorkDataRaw: NotableWorkRawItem[] = [
  {
    role: { en: 'Recording Engineer Assistant', th: 'Recording Engineer Assistant' },
    title: { en: 'drg. - พู่กัน (feat. dopameen & Last Ratha) [Official Music Video]', th: 'drg. - พู่กัน (feat. dopameen & Last Ratha) [Official Music Video]' },
    projectDescription: { 
        en: 'Assisted with microphone setup, session management, and ensuring smooth recording workflow for all artists involved. Gained hands-on experience with studio best practices.', 
        th: 'ช่วยในการตั้งค่าไมโครโฟน การจัดการเซสชัน และดูแลให้ขั้นตอนการบันทึกเสียงเป็นไปอย่างราบรื่นสำหรับศิลปินทุกคนที่เกี่ยวข้อง ได้รับประสบการณ์จริงเกี่ยวกับแนวทางปฏิบัติที่ดีที่สุดในสตูดิโอ' 
    },
    youtubeLink: 'https://www.youtube.com/watch?v=HBA2V_STyAg&si=D_z8wsaz0OtIoq4q', // Updated link
  },
  {
    role: { en: 'Recording Engineer Assistant', th: 'Recording Engineer Assistant' },
    title: { en: 'cheriie - เหมือนที่เราฝัน (To my almost) [ Live Session ]', th: 'cheriie - เหมือนที่เราฝัน (To my almost) [ Live Session ]' },
    projectDescription: {
        en: 'Supported the lead engineer during a live session recording, focusing on capturing a clean and emotive performance. Involved in quick problem-solving for audio issues.',
        th: 'สนับสนุนหัวหน้าวิศวกรเสียงระหว่างการบันทึกเสียงแสดงสด โดยเน้นที่การจับเสียงการแสดงที่สะอาดและสื่ออารมณ์ มีส่วนร่วมในการแก้ปัญหาด้านเสียงอย่างรวดเร็ว'
    },
    youtubeLink: 'https://www.youtube.com/watch?v=apSjUlnoUlk',
  },
  {
    role: { en: 'Music Composer and Sound Designer', th: 'Music Composer and Sound Designer' },
    title: { en: '【Furorin’s lore】The Tale Of Tooth Fairy', th: '【Furorin’s lore】The Tale Of Tooth Fairy' },
    projectDescription: {
        en: 'Created an original score and sound effects to enhance the narrative of this animated lore video. The music aimed to evoke a mystical and enchanting atmosphere.',
        th: 'สร้างสรรค์ดนตรีประกอบและเอฟเฟกต์เสียงเพื่อเสริมสร้างการเล่าเรื่องของวิดีโอแอนิเมชันนี้ ดนตรีมีจุดมุ่งหมายเพื่อสร้างบรรยากาศที่ลึกลับและน่าหลงใหล'
    },
    youtubeLink: 'https://www.youtube.com/watch?v=uPMDwDI_e5s',
  },
  {
    role: { en: 'Music Composer (Instrumental)', th: 'Music Composer (Instrumental)' },
    title: { en: '[Original Fansong MV] พิเศษใส่เฟีย || (For Keressa Zoulfia HBD 2024)', th: '[Original Fansong MV] พิเศษใส่เฟีย || (For Keressa Zoulfia HBD 2024)' },
    youtubeLink: 'https://www.youtube.com/watch?v=faTLoIDGt9M&t=195s',
    startTime: 195,
  },
];

export const notableWorkData: NotableWorkItem[] = notableWorkDataRaw.map((item, index) => {
  const videoId = getYouTubeVideoId(item.youtubeLink);
  const startTime = item.startTime || getYouTubeStartTime(item.youtubeLink);
  return {
    ...item,
    id: `notable-${index}-${videoId || 'no-id'}`,
    youtubeVideoId: videoId || '',
    // thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://placehold.co/480x360/232931/EAEAEA/png?text=Video+Fallback', // Removed
    startTime: startTime,
    startTimeFormatted: startTime ? formatTime(startTime) : undefined,
  };
});


export const goalsData: GoalItem[] = [
  {
    typeKey: 'short_term',
    points: {
      en: [
        'Compose original scores for short films, games, or commercials, showcasing versatility and emotional depth.',
        'Collaborate with directors, game developers, or artists on at least two significant projects to expand portfolio and network.',
        'Deepen expertise in orchestral mock-up and hybrid scoring techniques using current industry-standard software.',
        'Seek mentorship or masterclass opportunities with established composers to refine craft and gain industry insights.',
      ],
      th: [
        'แต่งเพลงประกอบ original score สำหรับหนังสั้น, เกม หรือโฆษณา โดยแสดงความสามารถรอบด้านและสื่ออารมณ์ได้ลึกซึ้ง',
        'ร่วมงานกับผู้กำกับ, game developers หรือศิลปินในโปรเจกต์สำคัญอย่างน้อยสองโปรเจกต์เพื่อขยาย portfolio และ network',
        'เพิ่มความเชี่ยวชาญในเทคนิค orchestral mock-up และ hybrid scoring โดยใช้ซอฟต์แวร์มาตรฐานอุตสาหกรรมปัจจุบัน',
        'มองหาโอกาสในการเป็นลูกศิษย์ (mentorship) หรือเข้าร่วม masterclass กับ composers ที่มีชื่อเสียงเพื่อพัฒนาฝีมือและรับข้อมูลเชิงลึกในวงการ',
      ]
    },
  },
  {
    typeKey: 'long_term',
    points: {
      en: [
        'Establish a reputation as a versatile and sought-after composer for film, television, or interactive media.',
        'Develop a unique compositional voice that blends traditional craftsmanship with innovative soundscapes.',
        'Contribute to the Thai music and media industry by creating high-quality original scores that gain international recognition.',
        'Build a personal studio equipped for professional-level composition, recording, and mixing.',
        'Mentor emerging composers and share knowledge within the creative community.',
      ],
      th: [
        'สร้างชื่อเสียงในฐานะ composer ที่มีความสามารถรอบด้านและเป็นที่ต้องการสำหรับภาพยนตร์, โทรทัศน์ หรือ interactive media',
        'พัฒนาเอกลักษณ์ในการแต่งเพลง (compositional voice) ที่ผสมผสานงานฝีมือแบบดั้งเดิมเข้ากับ soundscapes ที่สร้างสรรค์',
        'มีส่วนร่วมในวงการดนตรีและสื่อของไทยโดยการสร้าง original scores คุณภาพสูงที่ได้รับการยอมรับในระดับสากล',
        'สร้างสตูดิโอส่วนตัวที่พร้อมสำหรับการแต่งเพลง, อัดเสียง และ mixing ในระดับมืออาชีพ',
        'เป็น mentor ให้กับ composers รุ่นใหม่และแบ่งปันความรู้ภายในชุมชนสร้างสรรค์',
      ]
    },
  },
];
