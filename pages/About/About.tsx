'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';
import westminsterLogo from '@/images/westminster_logo.png';
import hinduLogo from '@/images/hindu_college.jpeg';
import pearsonLogo from '@/images/pearson-logo.png';
import expericeImage from '@/images/file.png';
import manImage from "@/images/man_laptop.png";
import graduate3DImage from '@/images/Graduate-Men.png';

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
  const { ref: educationRef, inView: educationInView } = useProjectInView();
  const { ref: experienceRef, inView: experienceInView } = useProjectInView();
  const { ref: imageRef, inView: imageInView } = useProjectInView();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="about"
      className="py-20 relative bg-customBlue"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-extrabold text-customDarkBlue">About Me</h2>
          <p className="text-lg mt-2 text-gray-600 font-bold">A glimpse into my journey and achievements</p>
        </motion.div>

        <div className="flex flex-col md:flex-row mb-16">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 lg:w-2/3 flex justify-center items-center mb-8 md:mb-0 md:mr-8 p-4"
          >
            <Image
              src={expericeImage}
              alt="Experience Image"
              width={750} // Increased size
              height={750} // Increased size
              className="object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
            />
          </motion.div>


          {/* Text Content */}
          <div className="md:w-2/3 text-customGrayBlue p-4 md:p-8 mt-12 font-semibold">
            <AnimatedParagraph
              text="Hello, I’m Ravindran Dharshan, a passionate software engineering student currently based in London, UK. I specialize in full-stack development, with a strong emphasis on frontend technologies such as React, Next.js, and Tailwind CSS, alongside robust backend capabilities with Node.js and Express."
              delay={0.2}
            />
            <AnimatedParagraph
              text="Throughout my academic and personal projects, I have successfully developed several applications, including an Uber clone and a real-time collaborative document editor. My keen interest in cybersecurity drives me to incorporate best practices into my work, ensuring that the solutions I build are both secure and efficient."
              delay={0.4}
            />
            <AnimatedParagraph
              text="As I progress in my career, I aspire to join dynamic teams where I can contribute to solving complex challenges in the tech industry. My objective is to harness my expertise in modern technologies and cybersecurity to create impactful and innovative solutions that meet the ever-evolving demands of the digital world."
              delay={0.6}
            />
          </div>

        </div>


        {/* Job Experience Section */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={experienceInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 mt-8 text-center">Experience</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Text Content */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={experienceInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-customDarkBlue p-8 rounded-lg shadow-lg flex flex-col items-center md:mr-8 transform transition-transform"
              >
                {/* Centered Image */}
                <div className="mb-4">
                  <Image src={westminsterLogo} alt="University of Westminster Logo" width={60} height={60} className="rounded-full" />
                </div>
                <strong className="text-xl text-white text-center">Front-End Engineer Intern</strong>
                <p className="text-gray-300 text-center">Hologo World, Remote</p>
                <div className="text-green-500 text-center">2024 - Present</div>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={experienceInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-customDarkBlue p-8 rounded-lg shadow-lg flex flex-col items-center md:mr-8 transform transition-transform"
              >
                {/* Centered Image */}
                <div className="mb-4">
                  <Image src={westminsterLogo} alt="University of Westminster Logo" width={60} height={60} className="rounded-full" />
                </div>
                <strong className="text-xl text-white text-center">Front-End Engineer Intern</strong>
                <p className="text-gray-300 text-center">Hologo World, Remote</p>
                <div className="text-green-500 text-center">2024 - Present</div>
              </motion.div>
            </div>


            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={experienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            //className="flex-shrink-0 w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 relative"
            >
              <Image
                src={expericeImage}
                alt="Hologo Logo"
                width={650}
                height={650}
                className="rounded-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/*education section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0 }}
          animate={educationInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 mt-8 text-center">Education</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* 3D Graduate Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={educationInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center"
            >
              <Image
                src={graduate3DImage}
                alt="3D Graduate Image"
                width={700} // Adjusted width for responsiveness
                height={700} // Adjusted height to match width
                className="rounded-lg object-cover"
              />
            </motion.div>

            {/* Education Items */}
            <div className="flex flex-wrap justify-center gap-4 text-center">
              {/* Education Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#5396d5] hover:via-[#2d8fb3] hover:to-[#35b3af] w-full md:w-[calc(33.33%-1rem)]"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image src={westminsterLogo} alt="University of Westminster Logo" width={70} height={70} />
                </div>
                <strong className="text-xl text-white">Bachelor of Engineering in Software Engineering</strong>
                <p className="text-gray-300">University of Westminster, London, United Kingdom</p>
                <div className="text-green-500">2023 - Present</div>
              </motion.div>

              {/* Education Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#5396d5] hover:via-[#2d8fb3] hover:to-[#35b3af] w-full md:w-[calc(33.33%-1rem)]"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image src={pearsonLogo} alt="Pearson Logo" width={60} height={70} className="rounded-full" />
                </div>
                <strong className="text-xl text-white">Diploma in English</strong>
                <p className="text-gray-300">ESoft Metro Campus, Colombo, Sri Lanka</p>
                <div className="text-green-500">2021 - 2022</div>
              </motion.div>

              {/* Education Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#5396d5] hover:via-[#2d8fb3] hover:to-[#35b3af] w-full md:w-[calc(33.33%-1rem)]"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image src={hinduLogo} alt="Jaffna Hindu College Logo" width={60} height={60} />
                </div>
                <strong className="text-xl text-white">G.C.E A/L</strong>
                <p className="text-gray-300">Jaffna Hindu College, Jaffna, Sri Lanka</p>
                <div className="text-green-500">2017 - 2020</div>
              </motion.div>

              {/* Additional Education Items can go here */}
              {/* They will automatically wrap to the next row if there are more than three items */}
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default About;