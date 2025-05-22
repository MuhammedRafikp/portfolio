import type { Skill } from '../types';
import { Code, Database, PenTool, Server, LayoutGrid, FileJson, Grid, Globe, Brush, Figma, Github, Terminal, Cpu, Package, Triangle as VectorTriangle, Zap, MessageSquare, Cloud, Layers, Box, MessageCircle, TestTube } from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: FileJson,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: Code,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Java',
    icon: Code,
    level: 65,
    category: 'frontend',
  },
  {
    name: 'C',
    icon: Code,
    level: 60,
    category: 'frontend',
  },
  {
    name: 'HTML5 & CSS3',
    icon: Globe,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'React.js',
    icon: Code,
    level: 88,
    category: 'frontend',
  },
  {
    name: 'Redux',
    icon: Layers,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: LayoutGrid,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Bootstrap',
    icon: LayoutGrid,
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
    icon: Server,
    level: 88,
    category: 'backend',
  },
  {
    name: 'Express.js',
    icon: Zap,
    level: 85,
    category: 'backend',
  },
  {
    name: 'WebSocket',
    icon: MessageSquare,
    level: 80,
    category: 'backend',
  },
  {
    name: 'RESTful APIs',
    icon: MessageCircle,
    level: 90,
    category: 'backend',
  },
  {
    name: 'Redis',
    icon: Database,
    level: 75,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: Database,
    level: 85,
    category: 'backend',
  },
  {
    name: 'Firebase',
    icon: Cloud,
    level: 80,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    level: 82,
    category: 'backend',
  },
  {
    name: 'Amazon S3',
    icon: Cloud,
    level: 80,
    category: 'backend',
  },
  {
    name: 'Cloudinary',
    icon: Cloud,
    level: 75,
    category: 'backend',
  },
  {
    name: 'Docker',
    icon: Package,
    level: 80,
    category: 'other',
  },
  {
    name: 'Kubernetes',
    icon: Box,
    level: 70,
    category: 'other',
  },
  {
    name: 'Git/GitHub',
    icon: Github,
    level: 90,
    category: 'other',
  },
  {
    name: 'GitHub Actions',
    icon: Terminal,
    level: 80,
    category: 'other',
  },
  {
    name: 'CI/CD Pipelines',
    icon: Terminal,
    level: 80,
    category: 'other',
  },
  {
    name: 'RabbitMQ',
    icon: MessageSquare,
    level: 75,
    category: 'other',
  },
  {
    name: 'gRPC',
    icon: MessageCircle,
    level: 70,
    category: 'other',
  },
  {
    name: 'Design Patterns',
    icon: Layers,
    level: 80,
    category: 'other',
  },
  {
    name: 'Postman',
    icon: TestTube,
    level: 85,
    category: 'other',
  },
  {
    name: 'Figma',
    icon: Figma,
    level: 80,
    category: 'design',
  },
];

export default skills;