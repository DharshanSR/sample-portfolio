'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projectData';
import PageTransition from '@/components/PageTransition';
import useProjectInView from '@/hooks/useProjectInView';
import ProjectCard from '@/components/ProjectCard';

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // Start scaled down
  visible: { opacity: 1, scale: 1 },
  entry: { opacity: 1, scale: 1 }, // Entry state is similar to visible
  exit: { opacity: 0, scale: 0.9 }, // Scale down on exit
};

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter(project =>
      filter === 'All' || project.category === filter.toLowerCase()
    );
    setFilteredProjects(newFilteredProjects);
    setVisibleProjects(8);
  }, [filter]);

  const handleLoadMore = () => {
    setShowAll(true);
    setVisibleProjects(filteredProjects.length);
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
            className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold text-2xl sm:text-3xl mb-4 text-center"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
            ref={sectionRef}
          >
            Portfolio
          </motion.h1>
          <motion.h2
            className="text-5xl sm:text-5xl font-bold mb-12 text-center text-white"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>

          {/* Filter Buttons */}
          <div className="text-center mb-12">
            {['All', 'Web', 'Mobile', 'AI-ML'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 m-2 rounded ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-800 transition'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Animate the presence of ProjectCards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={index} // Use index as key since no unique identifier is available
                  variants={scaleVariants}
                  initial="hidden"
                  animate="entry" // Use entry for initial animation
                  exit="exit"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-8">
            {showAll ? (
              <button onClick={handleShowLess} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-10">
                View Less
              </button>
            ) : (
              visibleProjects < filteredProjects.length && (
                <button onClick={handleLoadMore} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-10">
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
