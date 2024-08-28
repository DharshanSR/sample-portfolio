// data/projectData.ts

import { StaticImageData } from 'next/image';
import Footer from '@/images/Footer.jpg';

export type Project = {
    title: string;
    slug: string;
    smallDescription: string;
    image: StaticImageData;
    technologies: string[];
    liveLink: string;
    githubLink: string;
    category: 'web' | 'mobile' | 'ai-ml';
    features?: string[]; // Added features field
};

export const projects: Project[] = [
    {
        title: "Project One",
        slug: "project-one",
        smallDescription: "This is a small description for project one.",
        image: Footer,
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        liveLink: "https://cloud-script-docs.vercel.app/",
        githubLink: "https://github.com/DharshanSR",
        category: 'web',
        features: [
            "User authentication",
            "Real-time notifications",
            "Responsive design"
        ],
    },
    {
        title: "Project Two",
        slug: "project-two",
        smallDescription: "This is a small description for project two.",
        image: Footer,
        technologies: ["React Native", "JavaScript"],
        liveLink: "https://live-link.com/project-two",
        githubLink: "https://github.com/username/project-two",
        category: 'mobile',
        features: [
            "Offline support",
            "Push notifications",
            "Cross-platform compatibility"
        ],
    },
    {
        title: "Project Three",
        slug: "project-three",
        smallDescription: "This is a small description for project three.",
        image: Footer,
        technologies: ["Python", "TensorFlow"],
        liveLink: "https://live-link.com/project-three",
        githubLink: "https://github.com/username/project-three",
        category: 'ai-ml',
        features: [
            "Image classification",
            "Data augmentation",
            "Model evaluation"
        ],
    },
    {
        title: "Project Four",
        slug: "project-four",
        smallDescription: "This is a small description for project four.",
        image: Footer,
        technologies: ["Angular", "TypeScript"],
        liveLink: "https://live-link.com/project-four",
        githubLink: "https://github.com/username/project-four",
        category: 'web',
        features: [
            "Modular architecture",
            "HTTP client",
            "State management"
        ],
    },
    {
        title: "Project Five",
        slug: "project-five",
        smallDescription: "This is a small description for project five.",
        image: Footer,
        technologies: ["Node.js", "Express", "MongoDB"],
        liveLink: "https://live-link.com/project-five",
        githubLink: "https://github.com/username/project-five",
        category: 'web',
        features: [
            "RESTful API",
            "Database schema design",
            "Authentication and authorization"
        ],
    },
    {
        title: "Project Six",
        slug: "project-six",
        smallDescription: "This is a small description for project six.",
        image: Footer,
        technologies: ["Node.js", "Express", "MongoDB"],
        liveLink: "https://live-link.com/project-six",
        githubLink: "https://github.com/username/project-six",
        category: 'web',
        features: [
            "CRUD operations",
            "User management",
            "Email notifications"
        ],
    },
    {
        title: "Project Seven",
        slug: "project-seven",
        smallDescription: "This is a small description for project seven.",
        image: Footer,
        technologies: ["React Native", "Expo"],
        liveLink: "https://live-link.com/project-seven",
        githubLink: "https://github.com/username/project-seven",
        category: 'mobile',
        features: [
            "Geolocation",
            "Push notifications",
            "In-app purchases"
        ],
    },
    {
        title: "Project Ten",
        slug: "project-ten",
        smallDescription: "This is a small description for project ten.",
        image: Footer,
        technologies: ["Python", "Django"],
        liveLink: "https://live-link.com/project-ten",
        githubLink: "https://github.com/username/project-ten",
        category: 'ai-ml',
        features: [
            "REST API",
            "Admin dashboard",
            "Custom user authentication"
        ],
    },
    {
        title: "Project Eight",
        slug: "project-eight",
        smallDescription: "This is a small description for project eight.",
        image: Footer,
        technologies: ["Python", "Django", "PostgreSQL"],
        liveLink: "https://live-link.com/project-eight",
        githubLink: "https://github.com/username/project-eight",
        category: 'ai-ml',
        features: [
            "Data visualization",
            "User roles and permissions",
            "Complex queries"
        ],
    },
    {
        title: "Project Nine",
        slug: "project-nine",
        smallDescription: "This is a small description for project nine.",
        image: Footer,
        technologies: ["Python", "Django", "PostgreSQL"],
        liveLink: "https://live-link.com/project-nine",
        githubLink: "https://github.com/username/project-nine",
        category: 'ai-ml',
        features: [
            "Machine learning integration",
            "Dynamic data analysis",
            "Real-time updates"
        ],
    },
    // Add more projects and features as needed
];
