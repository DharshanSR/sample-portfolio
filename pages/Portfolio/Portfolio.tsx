'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projects } from '@/data/projectData';
import PageTransition from '@/components/PageTransition';
import { useInView } from 'react-intersection-observer';

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

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Use `useInView` to track when the section is in view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <PageTransition>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            className="text-white font-extrabold text-1xl mb-4 text-center"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h1>
          <motion.h1
            className="text-5xl font-bold mb-8 text-center text-white"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <AnimatePresence>
            <motion.div
              ref={sectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </AnimatePresence>
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
