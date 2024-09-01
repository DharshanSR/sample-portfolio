'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import westminsterLogo from '@/images/westminster_logo.png';
import moratuwaLogo from '@/images/University_of_Moratuwa_logo.png';
import hinduLogo from '@/images/hindu_college.jpeg';
import pearsonLogo from '@/images/pearson-logo.png';
import useProjectInView from '@/hooks/useProjectInView';

const AnimatedParagraph: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const { ref: paragraphRef, inView: paragraphInView } = useProjectInView();

  return (
    <motion.div
      ref={paragraphRef}
      initial={{ opacity: 0, y: 20 }}
      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-lg leading-relaxed mb-6 text-justify"
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* About Me Heading */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-semibold text-white">About Me</h2>
          <p className="text-lg mt-2 text-gray-400">A glimpse into my journey and achievements</p>
        </motion.div>

        {/* About Me Content */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Profile Image with Entry Animation */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-8"
          >
            <Image
              src={westminsterLogo}
              alt="University of Westminster Logo"
              width={isMobile ? 200 : 300}  // Adjust size for mobile view
              height={isMobile ? 200 : 300}
              className="rounded-full shadow-lg"
              priority
            />
          </motion.div>

          <div className="md:w-2/3">
            <AnimatedParagraph
              text="Hello, I&apos;m Ravindran Dharshan, a dedicated software engineering student based in London, UK. I specialize in full-stack development with a strong foundation in frontend technologies like React, Next.js, and Tailwind CSS, as well as backend development using Node.js and Express. My passion lies in creating robust and scalable applications that deliver exceptional user experiences."
              delay={0.2}
            />
            <AnimatedParagraph
              text="My journey in software engineering has been marked by hands-on projects and continuous learning. I have successfully built several applications, including an Uber clone and a real-time document editor, which have honed my skills in problem-solving and innovative thinking. I am particularly interested in cybersecurity and strive to integrate best practices in my projects to ensure secure and efficient solutions."
              delay={0.4}
            />
            <AnimatedParagraph
              text="As I advance in my career, I aim to contribute to dynamic teams and tackle complex challenges in the tech industry. My goal is to leverage my expertise in modern technologies and cybersecurity to drive impactful solutions and foster growth within the technology sector."
              delay={0.6}
            />
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
          animate={statsInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-24"
        >
          <div className="text-center flex flex-col items-center px-4 md:px-6">
            <FaBriefcase className="text-5xl md:text-6xl text-cyan-400 mb-2" />
            <p className="text-3xl md:text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={5} duration={2} /> <span className="text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Years of Experience</p>
          </div>
          <div className="text-center flex flex-col items-center px-4 md:px-6">
            <FaLaptopCode className="text-5xl md:text-6xl text-cyan-400 mb-2" />
            <p className="text-3xl md:text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={10} duration={2} /> <span className="text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Projects Completed</p>
          </div>
          <div className="text-center flex flex-col items-center px-4 md:px-6">
            <FaTrophy className="text-5xl md:text-6xl text-cyan-400 mb-2" />
            <p className="text-3xl md:text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={2} duration={2} /> <span className="text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Awards</p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          animate={educationInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 mt-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Education Item 1 */}
            <div className="flex items-center space-x-6">
              <div className="bg-gray-800 p-6 rounded-full border-2 border-gray-700">
                <Image src={westminsterLogo} alt="University of Westminster Logo" width={72} height={72} className="rounded-full" />
              </div>
              <div className="flex-1">
                <strong className="text-xl text-white">Bachelor of Engineering in Software Engineering</strong>
                <p className="text-gray-400">University of Westminster, London, United Kingdom</p>
                <div className="text-green-500">2023 - Present</div>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="flex items-center space-x-6">
              <div className="bg-gray-800 p-6 rounded-full border-2 border-gray-700">
                <Image src={pearsonLogo} alt="Pearson Logo" width={72} height={72} className="rounded-full" />
              </div>
              <div className="flex-1">
                <strong className="text-xl text-white">Diploma in English</strong>
                <p className="text-gray-400">ESoft Metro Campus, Colombo, Sri Lanka</p>
                <div className="text-green-500">2021 - 2022</div>
              </div>
            </div>

            {/* Education Item 3 */}
            <div className="flex items-center space-x-6">
              <div className="bg-gray-800 p-6 rounded-full border-2 border-gray-700">
                <Image src={hinduLogo} alt="Jaffna Hindu College Logo" width={72} height={72} className="rounded-full" />
              </div>
              <div className="flex-1">
                <strong className="text-xl text-white">G.C.E A/L</strong>
                <p className="text-gray-400">Jaffna Hindu College, Jaffna, Sri Lanka</p>
                <div className="text-green-500">2017 - 2020</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


