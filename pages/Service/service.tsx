'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import webDevelopment from "@/animation/web_development.json";
import mobileAppDevelopment from "@/animation/mobile_app_development.json";
import machineLearning from "@/animation/ai_machine_learning.json";
import contentWriting from "@/animation/content_writing.json";
import arrowAnimation from "@/animation/arrow.json";
import { motion } from 'framer-motion';
import useProjectInView from '@/hooks/useProjectInView';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const services = [
  {
    title: "Web Development",
    description: "Designing and developing responsive, high-performance websites utilizing advanced technologies like Next.js, TypeScript, and Tailwind CSS. Focused on creating seamless user experiences and robust functionality tailored to modern web standards.",
    animationData: webDevelopment,
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Crafting sophisticated and scalable mobile applications for both iOS and Android platforms. Emphasizing user-centric design, intuitive interfaces, and optimized performance to deliver exceptional mobile experiences and meet diverse user needs.",
    animationData: mobileAppDevelopment,
    link: "/mobile-app-development",
  },
  {
    title: "Machine Learning & AI",
    description: "Building advanced machine learning models and intelligent systems that leverage extensive data analysis and predictive modeling. Aimed at enhancing decision-making, automating complex processes, and driving innovation through data-driven insights.",
    animationData: machineLearning,
    link: "/machine-learning",
  },
  {
    title: "Blog & Article Writing",
    description: "Creating insightful and engaging blog content on Medium and other platforms. Sharing expertise and perspectives on technology trends, industry advancements, and best practices to inform and inspire a diverse audience of readers and professionals.",
    animationData: contentWriting,
    link: "/blog-writing",
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
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h1 className='text-white font-extrabold text-1xl mb-4'>Expertise</h1>
        <h2 className="text-4xl font-semibold mb-8 text-white">My Services</h2>
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
    </section>
  );
};

export default Expertise;
