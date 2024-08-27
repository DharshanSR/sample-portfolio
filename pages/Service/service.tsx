'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import webDevelopment from "@/animation/web_development.json";
import mobileAppDevelopment from "@/animation/mobile_app_development.json";
import machineLearning from "@/animation/ai_machine_learning.json";
import contentWriting from "@/animation/content_writing.json";
import uiDesign from "@/animation/female_Web_Designer_working_on_web_design.json"
import arrowAnimation from "@/animation/arrow.json";
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const services = [
  {
    title: "Full Stack Development",
    description: "Developing responsive, high-performance web applications with React, Next.js, TypeScript, Tailwind CSS, Node.js, and Express. Utilizing MongoDB, PostgreSQL, Docker, and CI/CD for robust, scalable solutions. Focused on seamless user experiences and scalable backend functionality.",
    animationData: webDevelopment,
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Building scalable mobile apps for iOS and Android using React Native and Flutter. Emphasizing user-centric design and performance with Redux, Firebase, and native APIs for optimized, intuitive experiences. Focused on seamless user experience",
    animationData: mobileAppDevelopment,
    link: "/mobile-app-development",
  },
  {
    title: "Machine Learning & AI",
    description: "Developing advanced machine learning models and intelligent systems that utilize comprehensive data analysis and predictive modeling. Focused on enhancing decision-making, automating complex processes, and driving innovation through data-driven insights.",
    animationData: machineLearning,
    link: "/machine-learning",
  },
  {
    title: "Blog & Article Writing",
    description: "Crafting insightful and engaging blog content for Medium, Stack Overflow, and other platforms. Sharing expertise on technology trends, industry advancements, and best practices to inform and inspire a diverse audience of readers and professionals.",
    animationData: contentWriting,
    link: "/blog-writing",
  },
  {
    title: "UI & UX Design",
    description: "Delivering exceptional UI/UX design services by combining user research, interactive prototyping, and visual design to create intuitive and engaging interfaces. Focused on enhancing user experiences through thoughtful design, usability testing, and accessibility best practices.",
    animationData: uiDesign,
    link: "/ui-ux-design",
  },
];

const Expertise: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleArrowClick = (link: string) => {
    router.push(link);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Use `useProjectInView` to track when the section is in view
  const { ref: sectionRef, inView: sectionInView } = useProjectInView();

  return (
    <section id="services" className="relative bg-gray-900">
      {/* Top SVG Divider */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,100 500,50 C650,0 850,0 1200,50 L1200,00 L0,0 Z"
            className="fill-current text-gray-700"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto text-center py-20">
        <h1 className="text-white font-extrabold text-1xl mb-4">Expertise</h1>
        <h2 className="text-5xl font-semibold mb-8 text-white">Areas of Expertise</h2>
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="relative bg-gray-800 hover:bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 h-full transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer group">
                {isClient && service.animationData && (
                  <div className="inset-0 flex items-center justify-center overflow-hidden cursor-pointer">
                    <Lottie
                      loop
                      animationData={service.animationData}
                      play
                      className="w-full h-64 transition-transform transform hover:scale-110"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 mt-4 text-green-500">{service.title}</h3>
                <p className="text-white text-justify mb-12">
                  {service.description}
                </p>
                <div
                  className="absolute bottom-4 right-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => handleArrowClick(service.link)}
                >
                  <p className="text-white font-bold">Read More</p>
                  {isClient && (
                    <Lottie
                      loop
                      animationData={arrowAnimation}
                      play
                      className="w-14 h-14"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom SVG Divider */}
      {/* <div className="w-full overflow-hidden">
        <svg
          className="w-full h-32"
          viewBox="0 0 1200 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C150,260 350,60 600,120 C850,180 1000,20 1200,100 L1200,320 L0,320 Z"
            className="fill-current text-gray-700"
          ></path>
        </svg>
      </div> */}
</section>
  );
};

export default Expertise;
