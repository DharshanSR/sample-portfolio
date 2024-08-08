'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectData';
import PageTransition from '@/components/PageTransition';
import useProjectInView from '@/hooks/useProjectInView';
import ProjectCard from '@/components/ProjectCard';

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref: sectionRef, inView: sectionInView } = useProjectInView();

  return (
    <PageTransition>
      <section id="portfolio" className="py-40 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            className="text-white font-extrabold text-2xl sm:text-3xl mb-4 text-center"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
            ref={sectionRef}
          >
            Portfolio
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-5xl font-bold mb-8 text-center text-white"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
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
