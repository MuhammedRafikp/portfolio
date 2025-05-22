import type { Skill } from '../types';
import { 
  SiJavascript, 
  SiTypescript,  
  SiC, 
  SiHtml5, 
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNodedotjs, 
  SiExpress, 
  SiSocketdotio, 
  SiRedis, 
  SiMongodb, 
  SiFirebase, 
  SiPostgresql, 
  SiCloudinary, 
  SiDocker, 
  SiKubernetes, 
  SiGithub, 
  SiGithubactions, 
  SiRabbitmq, 
  SiFigma,
  SiPostman
} from 'react-icons/si';
import { FaJava,FaAws, FaNetworkWired } from "react-icons/fa";
import {LayoutGrid} from "lucide-react";
import { FaServer, FaTerminal } from 'react-icons/fa';

const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Java',
    icon: FaJava,
    level: 65,
    category: 'frontend',
  },
  {
    name: 'C',
    icon: SiC,
    level: 60,
    category: 'frontend',
  },
  {
    name: 'HTML5 & CSS3',
    icon: SiHtml5,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'React.js',
    icon: SiReact,
    level: 88,
    category: 'frontend',
  },
  {
    name: 'Redux',
    icon: SiRedux,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Material-UI',
    icon: LayoutGrid,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    level: 88,
    category: 'backend',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    level: 85,
    category: 'backend',
  },
  {
    name: 'WebSocket',
    icon: SiSocketdotio,
    level: 80,
    category: 'backend',
  },
  {
    name: 'RESTful APIs',
    icon: FaServer,
    level: 90,
    category: 'backend',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    level: 75,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    level: 85,
    category: 'backend',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    level: 80,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    level: 82,
    category: 'backend',
  },
  {
    name: 'Amazon S3',
    icon: FaAws,
    level: 80,
    category: 'backend',
  },
  {
    name: 'Cloudinary',
    icon: SiCloudinary,
    level: 75,
    category: 'backend',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    level: 80,
    category: 'other',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    level: 70,
    category: 'other',
  },
  {
    name: 'Git/GitHub',
    icon: SiGithub,
    level: 90,
    category: 'other',
  },
  {
    name: 'GitHub Actions',
    icon: SiGithubactions,
    level: 80,
    category: 'other',
  },
  {
    name: 'CI/CD Pipelines',
    icon: FaTerminal,
    level: 80,
    category: 'other',
  },
  {
    name: 'RabbitMQ',
    icon: SiRabbitmq,
    level: 75,
    category: 'other',
  },
  {
    name: 'gRPC',
    icon: FaNetworkWired,
    level: 70,
    category: 'other',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    level: 85,
    category: 'other',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    level: 80,
    category: 'design',
  },
];

export default skills;