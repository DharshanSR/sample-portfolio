'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, projects } from '@/data/projectData';
import PageTransition from '@/components/PageTransition';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setShowAll(true);
    setVisibleProjects(projects.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setVisibleProjects(8);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <PageTransition>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className='text-white font-extrabold text-1xl mb-4 text-center animate-fadeIn'>Portfolio</h1>
          <h1 className="text-5xl font-bold mb-8 text-center text-white">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-gray-800 p-4 shadow-md rounded-lg transition-transform transform hover:shadow-xl hover:translate-x-2 hover:bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer"
                style={{ height: '450px' }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
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
            ))}
          </div>
          <div className="text-center mt-8">
            {showAll ? (
              <button onClick={handleShowLess} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                View Less
              </button>
            ) : (
              visibleProjects < projects.length && (
                <button onClick={handleLoadMore} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                  View More
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;
