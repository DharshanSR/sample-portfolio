'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import webDevelopment from "@/animation/web_development.json";
import mobileAppDevelopment from "@/animation/mobile_app_development.json";
import machineLearning from "@/animation/ai_machine_learning.json";
import contentWriting from "@/animation/content_writing.json";
import uiDesign from "@/animation/female_Web_Designer_working_on_web_design.json";
import arrowAnimation from "@/animation/arrow.json";
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';
import serviceMan from '@/images/serviceMen.png';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const services = [
  {
    title: "Full Stack WedDevelopment",
    description: "Developing responsive, high-performance web applications with React, Next.js, TypeScript, Tailwind CSS, Node.js, and Express. Utilizing MongoDB, PostgreSQL, Docker, and CI/CD for robust, scalable solutions. Focused on seamless user experiences and scalable backend functionality.",
    animationData: webDevelopment,
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Building scalable mobile apps for iOS and Android using React Native and Flutter. Emphasizing user-centric design and performance with Redux, Firebase, and native APIs for optimized, intuitive experiences.",
    animationData: mobileAppDevelopment,
    link: "/mobile-app-development",
  },
  {
    title: "Machine Learning & AI",
    description: "Developing advanced machine learning models and intelligent systems through data analysis and predictive modeling. Focused on enhancing decision-making, automating complex processes, and driving innovation.",
    animationData: machineLearning,
    link: "/machine-learning",
  },
  {
    title: "Blog & Article Writing",
    description: "Crafting engaging blog content for platforms like Medium and Stack Overflow. Sharing expertise on technology trends, industry advancements, and best practices to inform and inspire.",
    animationData: contentWriting,
    link: "/blog-writing",
  },
  {
    title: "UI & UX Design",
    description: "Delivering exceptional UI/UX design services by combining user research, prototyping, and visual design to create intuitive interfaces. Focused on enhancing user experiences through thoughtful design and usability testing.",
    animationData: uiDesign,
    link: "/ui-ux-design",
  },
];

const Expertise: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { ref: sectionRef, inView: sectionInView } = useProjectInView();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleArrowClick = (link: string) => {
    router.push(link);
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
  return (
    <section
      id="services"
      className="py-20 relative bg-customBlue"
    >
      <div className="container mx-auto text-center py-24">
        <div className="flex flex-col items-center mb-12">
          <h1 className="font-extrabold text-2xl text-white mb-4 -mt-24">Expertise</h1>
          <Image
            src={serviceMan}
            alt="Expertise Icon"
            width={400}
            height={400}
            className="mb-8"
          />
          <h2 className="text-5xl font-extrabold text-customDarkBlue">Areas of Expertise</h2>
        </div>

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
              <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 h-full transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer group">
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
                <p className="text-white text-justify mb-12">{service.description}</p>
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
    </section>
  );
};

export default Expertise;
