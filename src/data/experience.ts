import type { Education, Experience } from '../types';

export const workExperience: Experience[] = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'E-comex',
    duration: 'Sep 2024 - Present',
    description: [
      'Developed and maintained responsive websites for small businesses',
      'Designed mobile-first UI using HTML5, CSS3, and JavaScript frameworks for better user engagement',
      'Collaborated with clients to deliver tailored solutions.',
    ],
  },
  
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'MERN Stack Development',
    school: 'Brototype, Calicut',
    duration: 'Nov 2023 - Present',
    description: 'Specialized in MERN Stack Development',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Physics',
    school: 'University of Calicut',
    duration: '2020 - 2023',
    description: '',
  },
];