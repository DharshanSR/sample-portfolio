'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';
import { Project } from '@/data/projectData'; // Import Project type
import githubIcon from '@/images/GitHub_Invertocat_Logo.png';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const { ref, inView } = useProjectInView();

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-4 shadow-md rounded-lg transition-transform transform hover:shadow-xl hover:translate-x-2 hover:bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer overflow-hidden"
      style={{ minHeight: '450px' }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <div className="mb-4 w-full h-60 relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform transform hover:scale-110"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center text-white">{project.title}</h2>
      <p className="text-white mb-2 text-center">{project.smallDescription}</p>

      {/* Display technologies with animation and hover effects */}
      <div className="text-center mb-4 flex flex-wrap justify-center">
        {project.technologies.map((tech: string, i: number) => (
          <motion.span
            key={i}
            className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full m-1 transition-colors duration-300"
            variants={techVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ backgroundColor: 'rgba(34,197,94,0.8)', color: '#fff' }} // Custom hover color
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Optional: Project details */}
      {project.features && (
        <div className="text-white mb-4">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Key Features
            </span>
          </h2>
          <div className="space-y-4 text-center">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-sm text-gray-300"
              >
                <svg
                  className="w-5 h-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.707 5.293a1 1 0 00-1.414 0L9 15.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l12-12a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}


      <div className="flex justify-center space-x-4 mt-auto">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          <Image
            src={githubIcon}
            alt="GitHub"
            width={24} // Adjust width as needed
            height={24} // Adjust height as needed
            className="mr-2" // Optional: Adds spacing between the image and text
          />
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
