'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import westminsterLogo from '@/images/westminster_logo.png';
import moratuwaLogo from '@/images/University_of_Moratuwa_logo.png';
import hinduLogo from '@/images/hindu_college.jpeg';
import pearsonLogo from '@/images/pearson-logo.png';
import useProjectInView from '@/hooks/useProjectInView';

// Reusable Paragraph Component with Animation
const AnimatedParagraph: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const { ref: paragraphRef, inView: paragraphInView } = useProjectInView();

  return (
    <motion.div
      ref={paragraphRef}
      initial={{ opacity: 0, y: 20 }}
      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-lg leading-relaxed mb-4 text-justify"
    >
      {text}
    </motion.div>
  );
};

const About: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useProjectInView();
  const { ref: statsRef, inView: statsInView } = useProjectInView();
  const { ref: educationRef, inView: educationInView } = useProjectInView();
  const { ref: imageRef, inView: imageInView } = useProjectInView();

  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">

        {/* About Me Heading */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-semibold text-white">About Me</h2>
        </motion.div>

        {/* About Me Content */}
        <div className="flex flex-col items-center md:flex-row mb-12">
          {/* Profile Image with Entry Animation */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0"
          >
            <Image
              src={westminsterLogo} // Replace with your actual profile image
              alt="University of Westminster Logo"
              width={400}
              height={420}
              className="rounded-full shadow-lg"
            />
          </motion.div>

          <div className="md:w-2/3 mt-8 md:mt-0">
            {/* Paragraphs with Animation */}
            <AnimatedParagraph
              text="Hello, I&apos;m Ravindran Dharshan, a dedicated software engineering student based in London, UK. With a strong foundation in web development, mobile app development, and machine learning, I am passionate about solving complex problems and crafting innovative solutions that drive progress."
              delay={0.2}
            />
            <AnimatedParagraph
              text="My expertise spans across modern technologies such as Next.js, TypeScript, and Tailwind CSS. I am committed to continuous learning and stay engaged with the latest industry trends. Outside of coding, I enjoy writing insightful blogs, exploring new technologies, and collaborating on impactful projects."
              delay={0.4}
            />
            <AnimatedParagraph
              text="I am eager to contribute to dynamic teams and take on new challenges. My goal is to apply my skills and knowledge to deliver exceptional results and make a meaningful impact in the tech industry."
              delay={0.6}
            />
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-around mb-12"
        >
          <div className="text-center mb-8 md:mb-0 flex flex-col items-center px-4 md:px-0">
            <FaBriefcase className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={5} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Years of Experience</p>
          </div>
          <div className="text-center mb-8 md:mb-0 flex flex-col items-center px-4 md:px-0">
            <FaLaptopCode className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={10} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Projects Completed</p>
          </div>
          <div className="text-center flex flex-col items-center px-4 md:px-0">
            <FaTrophy className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={2} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Awards</p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, x: -50 }}
          animate={educationInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-6 mt-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={westminsterLogo}
                alt="University of Westminster Logo"
                width={140}
                height={140}
                className="border-gray-700 mb-4"
              />
              <div className="text-center">
                <strong className="text-xl text-white">
                  Bachelor of Engineering in Software Engineering
                </strong>
                <br />
                University of Westminster, London, United Kingdom
                <br />
                <div className="text-green-500">2023 - Present<br /></div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={moratuwaLogo}
                alt="University of Moratuwa Logo"
                width={140}
                height={140}
                className="border-gray-700 mb-4"
              />
              <div className="text-center">
                <strong className="text-xl text-white">Full Stack Developer Trainee</strong>
                <br />
                University of Moratuwa, Colombo, Sri Lanka
                <br />
                <div className="text-green-500">2023 - Present<br /></div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={pearsonLogo}
                alt="Pearson Institute Logo"
                width={160}
                height={160}
                className="border-gray-700 mb-4"
              />
              <div className="text-center mt-8">
                <strong className="text-xl text-white">Diploma in English</strong>
                <br />
                ESoft Metro Campus, Colombo, Sri Lanka
                <br />
                <div className="text-green-500">2022 - 2023<br /></div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={hinduLogo}
                alt="Hindu College Logo"
                width={120}
                height={120}
                className="border-gray-700 mb-4"
              />
              <div className="text-center">
                <strong className="text-xl text-white">High School Diploma</strong>
                <br />
                Hindu College, Colombo, Sri Lanka
                <br />
                <div className="text-green-500">2010 - 2021<br /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
