'use client'

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import webDevelopment from "@/animation/web_development.json";
import mobileAppDevelopment from "@/animation/mobile_app_development.json";
import machineLearning from "@/animation/ai_machine_learning.json";
import contentWriting from "@/animation/content_writing.json";


const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const services = [
  {
    title: "Web Development",
    description: "Designing and developing responsive, high-performance websites utilizing advanced technologies like Next.js, TypeScript, and Tailwind CSS. Focused on creating seamless user experiences and robust functionality tailored to modern web standards.",
    animationData: webDevelopment,
  },
  {
    title: "Mobile App Development",
    description: "Crafting sophisticated and scalable mobile applications for both iOS and Android platforms. Emphasizing user-centric design, intuitive interfaces, and optimized performance to deliver exceptional mobile experiences and meet diverse user needs.",
    animationData: mobileAppDevelopment,
  },
  {
    title: "Machine Learning",
    description: "Building advanced machine learning models and intelligent systems that leverage extensive data analysis and predictive modeling. Aimed at enhancing decision-making, automating complex processes, and driving innovation through data-driven insights.",
    animationData: machineLearning,
  },
  {
    title: "Blog Writing",
    description: "Creating insightful and engaging blog content on Medium and other platforms. Sharing expertise and perspectives on technology trends, industry advancements, and best practices to inform and inspire a diverse audience of readers and professionals.",
    animationData: contentWriting,
  },
];

const Expertise: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="services" className="py-20 bg-sky-950">
      <div className="container mx-auto text-center">
        <h1 className='text-white font-extrabold text-1xl mb-4'>Expertise</h1>
        <h2 className="text-3xl font-semibold mb-8 text-white">My Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative bg-white rounded-lg shadow-lg p-6 h-full transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer">
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
                <h3 className="text-xl font-bold mb-4 mt-4">{service.title}</h3>
                <p className="text-gray-700 text-justify">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Expertise;
