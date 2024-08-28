'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skillsData';

// Animation variants for each skill box
const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: { scale: 1.08, transition: { duration: 0.3, ease: 'easeInOut' } },
};

// Animation for the section title
const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold text-2xl sm:text-3xl mb-4 text-center">Skills</h2>
        <motion.h1
          className="text-5xl font-extrabold text-white mb-12 mt-6"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Triggers animation when in view
        >
          Tools & Technology
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              custom={categoryIndex}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Triggers animation when in view
              whileHover="hover"
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all duration-300"
            >
              <h2 className="text-2xl text-yellow-400 font-semibold mb-6">{category}</h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    custom={skillIndex}
                    variants={boxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} // Triggers animation when in view
                    whileHover="hover"
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="mb-2"
                    />
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
