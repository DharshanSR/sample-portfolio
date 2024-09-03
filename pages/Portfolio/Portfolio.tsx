'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Swiper autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { projects } from '@/data/projectData';
// import PageTransition from '@/components/PageTransition';
import useProjectInView from '@/hooks/useProjectInView';
import ProjectCard from '@/components/ProjectCard';

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  entry: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // State for current slide
  const [totalSlides, setTotalSlides] = useState(0); // State for total slides

  useEffect(() => {
    const newFilteredProjects = projects.filter(project =>
      filter === 'All' || project.category === filter.toLowerCase()
    );
    setFilteredProjects(newFilteredProjects);
    setVisibleProjects(8);
  }, [filter]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <section id="portfolio" className="py-20 relative bg-customBlue">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            className="text-white mt-8 font-bold text-2xl sm:text-3xl mb-4 text-center"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
            ref={sectionRef}
          >
            Portfolio
          </motion.h1>
          <motion.h2
            className="text-5xl sm:text-5xl font-bold mb-12 text-center text-customDarkBlue"
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

          {/* Swiper Project Display */}
          {isMobile ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => (
                  `<span class="${className}"></span>`
                ),
              }}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              onSlideChange={(swiper) => {
                setCurrentSlide(swiper.activeIndex + 1);
                setTotalSlides(swiper.slides.length);
              }}
              className="mySwiper"
              style={{ paddingBottom: '80px' }}
            >
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={scaleVariants}
                    initial="hidden"
                    animate="entry"
                    exit="exit"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <motion.div
                    key={index}
                    variants={scaleVariants}
                    initial="hidden"
                    animate="entry"
                    exit="exit"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {isMobile && totalSlides > 0 && (
            <div className="absolute bottom-4 right-4 flex items-center bg-gray-800 text-white p-2 rounded-full shadow-lg">
              <span className="font-semibold text-lg">{currentSlide}</span>
              <span className="mx-2">/</span>
              <span className="font-semibold text-lg">{totalSlides}</span>
            </div>
          )}


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
  );
};

export default Portfolio;
