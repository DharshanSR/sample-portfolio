// data/projectData.ts

import { StaticImageData } from 'next/image';
import Footer from '@/images/Footer.jpg';
import FooterDown from '@/images/Footer_down.jpg';

export type Project = {
    title: string;
    slug: string;
    smallDescription: string;
    fullDescription: string; // Single string with HTML paragraph tags
    image: StaticImageData;
    additionalImages?: StaticImageData[];
    technologies: string[];
    liveLink: string;
    githubLink: string;
};

export const projects: Project[] = [
    {
        title: "Project One",
        slug: "project-one",
        smallDescription: "This is a small description for project one.",
        fullDescription: `
            <p>This is the first paragraph of the full description for project one.
            This is the second paragraph of the full description for project one. It provides additional details about the project, including its goals and outcomes.</p>
            <p>This is the third paragraph, which discusses the challenges faced during the development and how they were overcome.This is the first paragraph of the full description for project one.
            This is the second paragraph of the full description for project one. It provides additional details about the project, including its goals and outcomes.This is the third paragraph, which discusses the challenges faced during the development and how they were overcome.</p>
        `,
        image: Footer,
        additionalImages: [FooterDown, Footer, Footer, Footer, Footer, Footer],
        technologies: ["React", "TypeScript", "Tailwind CSS", "html", "css"],
        liveLink: "https://live-link.com/project-one",
        githubLink: "https://github.com/username/project-one",
    },
    {
        title: "Project Two",
        slug: "project-two",
        smallDescription: "This is a small description for project two.",
        fullDescription: `
            <p>This is the first paragraph of the full description for project two. This is the second paragraph of the full description for project two. It details the features implemented and the technology stack used.</p>
            <p>The third paragraph highlights the user feedback received and any future improvements planned.</p>
        `,
        image: Footer,
        additionalImages: [FooterDown, Footer, Footer, Footer, Footer, Footer],
        technologies: ["React", "TypeScript", "Tailwind CSS", "html", "css"],
        liveLink: "https://live-link.com/project-two",
        githubLink: "https://github.com/username/project-two",
    },
    {
        title: "Project Three",
        slug: "project-three",
        smallDescription: "This is a small description for project three.",
        fullDescription: `
            <p>The first paragraph introduces the project and its primary objectives.</p>
            <p>The second paragraph provides an overview of the development process and the key milestones achieved.</p>
            <p>The final paragraph discusses the impact of the project and potential areas for future work.</p>
        `,
        image: Footer,
        technologies: ["Vue.js", "JavaScript", "Bootstrap"],
        liveLink: "https://live-link.com/project-three",
        githubLink: "https://github.com/username/project-three",
    },
    {
        title: "Project Four",
        slug: "project-four",
        smallDescription: "This is a small description for project four.",
        fullDescription: `
            <p>Project four is an innovative solution aimed at improving user engagement.</p>
            <p>The first paragraph covers the problem statement and the rationale behind the project's inception.</p>
            <p>The second paragraph goes into technical details, including the frameworks and tools used for development.</p>
            <p>The third paragraph provides insights into the project's performance and user reception.</p>
        `,
        image: Footer,
        technologies: ["Angular", "TypeScript", "Sass"],
        liveLink: "https://live-link.com/project-four",
        githubLink: "https://github.com/username/project-four",
    },
    {
        title: "Project Five",
        slug: "project-five",
        smallDescription: "This is a small description for project five.",
        fullDescription: `
            <p>In this project, the focus was on creating a scalable application with a microservices architecture.</p>
            <p>The first paragraph explains the project's architecture and design decisions.</p>
            <p>The second paragraph details the implementation phases and any hurdles encountered.</p>
            <p>The final paragraph highlights the achievements and lessons learned from the project.</p>
        `,
        image: Footer,
        technologies: ["Node.js", "Express", "MongoDB"],
        liveLink: "https://live-link.com/project-five",
        githubLink: "https://github.com/username/project-five",
    },
    {
        title: "Project Six",
        slug: "project-six",
        smallDescription: "This is a small description for project six.",
        fullDescription: `
            <p>Project six is designed to streamline user workflows and improve efficiency.</p>
            <p>The initial paragraph discusses the problem statement and the user requirements.</p>
            <p>The middle paragraph delves into the development approach and features implemented.</p>
            <p>The final paragraph assesses the project's success and areas for enhancement.</p>
        `,
        image: Footer,
        technologies: ["Python", "Django", "PostgreSQL"],
        liveLink: "https://live-link.com/project-six",
        githubLink: "https://github.com/username/project-six",
    }, {
        title: "Project Six",
        slug: "project-six",
        smallDescription: "This is a small description for project six.",
        fullDescription: `
            <p>Project six is designed to streamline user workflows and improve efficiency.</p>
            <p>The initial paragraph discusses the problem statement and the user requirements.</p>
            <p>The middle paragraph delves into the development approach and features implemented.</p>
            <p>The final paragraph assesses the project's success and areas for enhancement.</p>
        `,
        image: Footer,
        technologies: ["Python", "Django", "PostgreSQL"],
        liveLink: "https://live-link.com/project-six",
        githubLink: "https://github.com/username/project-six",
    }, {
        title: "Project Six",
        slug: "project-six",
        smallDescription: "This is a small description for project six.",
        fullDescription: `
            <p>Project six is designed to streamline user workflows and improve efficiency.</p>
            <p>The initial paragraph discusses the problem statement and the user requirements.</p>
            <p>The middle paragraph delves into the development approach and features implemented.</p>
            <p>The final paragraph assesses the project's success and areas for enhancement.</p>
        `,
        image: Footer,
        technologies: ["Python", "Django", "PostgreSQL"],
        liveLink: "https://live-link.com/project-six",
        githubLink: "https://github.com/username/project-six",
    },
    // Add more projects and images as needed
];
