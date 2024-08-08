'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { ref, inView } = useProjectInView();

  return (
    <motion.div
      ref={ref} // Use ref from useProjectInView hook
      className="bg-gray-800 p-4 shadow-md rounded-lg transition-transform transform hover:shadow-xl hover:translate-x-2 hover:bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer"
      style={{ height: '450px' }}
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
      <h2 className="text-xl font-bold mb-4 text-center text-white">{project.title}</h2>
      <p className="text-white mb-6 text-center">{project.smallDescription}</p>
      <div className="flex justify-center mt-auto">
        <Link
          href={`/project/${project.slug}`}
          className="bg-gray-700 text-green-300 px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
