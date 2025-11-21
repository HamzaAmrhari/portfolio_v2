import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSanity, SiLaravel } from 'react-icons/si';

export const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Sanity CMS', icon: SiSanity, color: '#F03E2F' },
    { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
];

export const projects = [
    {
        title: 'company Website',
        description: 'A company informational website with pages for news, services, and document downloads.',
        tags: ['React', 'Tailwind CSS', 'Sanity CMS'],
        image: '/com.jpg',
        github: '#',
        demo: '#',
    },
    {
        title: 'Gestion Syndic',
        description: 'A complete management system for buildings (apartments, expenses, incomes, printable reports).',
        tags: ['React', 'Tailwind CSS', 'Laravel API'],
        image: '/sandic-manager.jpg',
        github: '#',
        demo: '#',
    },
    {
        title: 'Online Store (E-commerce)',
        description: 'Full-stack online store with admin dashboard. Features product management, cart, and checkout.',
        tags: ['React', 'Tailwind CSS', 'Laravel'],
        image: '/online-store.jpg',
        github: '#',
        demo: '#',
    },
    {
        title: 'Formation Manager',
        description: 'A system for managing formations for employees in companies or startups.',
        tags: ['React', 'Tailwind CSS'],
        image: '/formation-manager.jpg',
        github: '#',
        demo: '#',
    },
];

export const experiences = [
    {
        title: 'Full Stack Developer Intern',
        company: 'Tech Solutions Inc.', // Placeholder
        period: '2023 - Present',
        description: 'Built a full management system for news, offers, and jobs. Implemented printable report generation and optimized database queries.',
    },
    {
        title: 'Freelance Front-End Developer',
        company: 'Self-Employed',
        period: '2022 - 2023',
        description: 'Developed modern service websites and dashboards for various clients using React and Tailwind CSS.',
    },
];
