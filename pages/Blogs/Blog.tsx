'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import FooterImage from '@/images/Footer.jpg';
import setupImage from '@/images/setup.png';
import componentImage from '@/images/component.png';
import propsStateImage from '@/images/props.png';
import aiImage from '@/images/airole.png';
import scalableImage from '@/images/scalability-in-system-design.png';
import mfaImage from '@/images/MFA-blog.png';
import machineLearningImage from '@/images/comprehensive.png';
import pageRoutingImage from '@/images/gynamic-routes.png';
import iotImage from '@/images/iot.png';
import WestminsterLogo from '@/images/westminster_logo.png';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ArticleCard';
import { motion } from 'framer-motion';
import blogManImage from '@/images/blogMan.png';

interface Article {
  title: string;
  description: string;
  link: string;
  platform: string;
  image: StaticImageData | string;
}

const articles: Article[] = [
  {
    title: 'How to Set Up a React Project Using Vite',
    description: 'Learn how to set up a React project using Vite.',
    link: 'https://medium.com/@dharshanravindran8/how-to-set-up-a-react-project-using-vite-48d544728caf',
    platform: 'Medium',
    image: setupImage,
  },
  {
    title: 'Class vs. Functional Components in React',
    description: 'Understanding the difference class and functional components in React.',
    link: 'https://medium.com/@dharshanravindran8/understanding-react-components-class-components-vs-functional-components-481c3c4efdee',
    platform: 'Medium',
    image: componentImage,
  },
  {
    title: 'State and Props in React Explained',
    description: 'Understanding the difference between state and props in React.',
    link: 'https://medium.com/@dharshanravindran8/state-and-props-in-react-cd199c3055e1',
    platform: 'Medium',
    image: propsStateImage,
  },
  {
    title: 'The Role of AI in Modern Software Development',
    description: 'Exploring how AI transforming software development practices and tools.',
    link: 'https://dev.to/yourprofile/react-hooks-a-deep-dive',
    platform: 'Medium',
    image: aiImage,
  },
  {
    title: 'How to Build Scalable Software Systems: Key Principles and Techniques',
    description: 'Principles and Techniques for Scalable Software Design.',
    link: 'https://medium.com/@yourprofile/advanced-typescript-tips',
    platform: 'Medium',
    image: scalableImage,
  },
  {
    title: 'How to Implement Multi-Factor Authentication (MFA) in Your Apps',
    description: 'A guide to adding multi-factor authentication to enhance app security.',
    link: 'https://dev.to/yourprofile/state-management-with-redux',
    platform: 'Dev.to',
    image: mfaImage,
  },
  {
    title: 'Getting Started with Machine Learning: A Comprehensive Guide',
    description: 'An introduction to machine learning concepts and how to get started.',
    link: 'https://medium.com/@yourprofile/building-scalable-react-apps',
    platform: 'Medium',
    image: machineLearningImage,
  },
  {
    title: 'Understanding Next.js Pages and Routing: A Comprehensive Overview',
    description: 'An overview of how Next.js handles pages and routing for your applications.',
    link: 'https://dev.to/yourprofile/css-grid-vs-flexbox',
    platform: 'Dev.to',
    image: pageRoutingImage,
  },
  {
    title: 'Unlocking the Potential of IoT: Key Design Strategies',
    description: 'An overview of key design strategies for IoT applications.',
    link: 'https://dev.to/yourprofile/css-grid-vs-flexbox',
    platform: 'Dev.to',
    image: iotImage,
  },
];

const Blog: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  // Different animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered animation
      },
    }),
  };

  // Entry animation for the "Load More" button
  const buttonVariants = {
    hidden: { scale: 0.8, rotate: -10, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="blogs" className="relative bg-customBlue py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col mb-12">
        <Image
            src={blogManImage}
            alt="Expertise Icon"
            width={250}
            height={250}
            className="mb-2 -mt-32"
          />
          <h1 className="font-extrabold text-2xl text-white mb-4 -mt-40">Blogs</h1>
          <h2 className="text-5xl font-extrabold text-customDarkBlue">My Articles</h2>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {articles.slice(0, visibleCount).map((article, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <ArticleCard article={article} index={index} />
            </motion.div>
          ))}
        </motion.div>
        {visibleCount < articles.length && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="text-center mt-8"
          >
            <Button
              onClick={handleLoadMore}
              className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out mt-10"
            >
              Explore More
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
