import { StaticImageData } from 'next/image';
import FooterImage from '@/images/Footer.jpg';  // Example image

export interface Project {
  title: string;
  smallDescription: string;
  fullDescription: string;
  technologiesUsed: string[];
  image: StaticImageData;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Google Docs Clone",
    smallDescription: "A clone of Google Docs with a rich text editor.",
    fullDescription: `
      <p>This is the full description of the Google Docs Clone project. It showcases the main features and goals of the project.
      The project includes a rich text editor that allows for document formatting, collaboration features, and file sharing capabilities.</p>
      <p>Implemented using React, TypeScript, and Tailwind CSS, this clone aims to replicate the core functionalities of Google Docs with additional custom enhancements.</p>
      <p>Additional sections provide detailed information on the technologies used, challenges faced during development, and key takeaways from the project.</p>
    `,
    technologiesUsed: ["React", "TypeScript", "Tailwind CSS"],
    image: FooterImage,
    liveLink: "http://live-link1.com",
    githubLink: "http://github-link1.com"
  },
  {
    title: "Movie Booking",
    smallDescription: "An app for booking movie tickets.",
    fullDescription: `
      <p>This project is a Movie Booking application that allows users to search for movies, view showtimes, and book tickets.</p>
      <p>Built using Next.js, TypeScript, and Tailwind CSS, it includes features like user authentication, seat selection, and payment integration.</p>
      <p>It demonstrates skills in building a full-stack application with modern tools and practices.</p>
    `,
    technologiesUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: FooterImage,
    liveLink: "http://live-link2.com",
    githubLink: "http://github-link2.com"
  },
  {
    title: "E-commerce Store",
    smallDescription: "A fully-featured e-commerce store with user management.",
    fullDescription: `
      <p>This e-commerce store allows users to browse products, add them to their cart, and complete purchases.</p>
      <p>Built with React, Next.js, and Tailwind CSS, the application includes features like product filtering, user authentication, and order management.</p>
      <p>It showcases the ability to handle complex user interactions and integrate with backend services.</p>
    `,
    technologiesUsed: ["React", "Next.js", "Tailwind CSS"],
    image: FooterImage,
    liveLink: "http://live-link3.com",
    githubLink: "http://github-link3.com"
  },
  {
    title: "Portfolio Website",
    smallDescription: "A personal portfolio website to showcase projects and skills.",
    fullDescription: `
      <p>This is a personal portfolio website designed to showcase various projects, skills, and experiences.</p>
      <p>Built using React, Next.js, and Tailwind CSS, it includes sections for a portfolio, contact form, and blog.</p>
      <p>The website features a modern design and responsive layout, demonstrating proficiency in frontend development.</p>
    `,
    technologiesUsed: ["React", "Next.js", "Tailwind CSS"],
    image: FooterImage,
    liveLink: "http://live-link4.com",
    githubLink: "http://github-link4.com"
  },
  {
    title: "Chat Application",
    smallDescription: "A real-time chat application with user authentication.",
    fullDescription: `
      <p>This chat application allows users to join chat rooms, send messages in real-time, and manage user profiles.</p>
      <p>Developed with React, Next.js, and Tailwind CSS, it features WebSocket integration for real-time communication and user authentication.</p>
      <p>It demonstrates skills in building real-time applications and managing user interactions.</p>
    `,
    technologiesUsed: ["React", "Next.js", "Tailwind CSS"],
    image: FooterImage,
    liveLink: "http://live-link5.com",
    githubLink: "http://github-link5.com"
  }
];

export default projects;
