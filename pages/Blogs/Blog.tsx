'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import FooterImage from '@/images/Footer.jpg';
import WestminsterLogo from '@/images/westminster_logo.png';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ArticleCard';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  description: string;
  link: string;
  platform: string;
  image: StaticImageData | string;
}

const articles: Article[] = [
  {
    title: 'Understanding TypeScript',
    description: 'A comprehensive guide to getting started with TypeScript.',
    link: 'https://medium.com/@yourprofile/understanding-typescript',
    platform: 'Medium',
    image: FooterImage,
  },
  {
    title: 'React Hooks: A Deep Dive',
    description: 'Exploring the powerful world of React Hooks.',
    link: 'https://dev.to/yourprofile/react-hooks-a-deep-dive',
    platform: 'Dev.to',
    image: WestminsterLogo,
  },
  // Add more articles here
  {
    title: 'Understanding TypeScript',
    description: 'A comprehensive guide to getting started with TypeScript.',
    link: 'https://medium.com/@yourprofile/understanding-typescript',
    platform: 'Medium',
    image: FooterImage,
  },
  {
    title: 'React Hooks: A Deep Dive',
    description: 'Exploring the powerful world of React Hooks.',
    link: 'https://dev.to/yourprofile/react-hooks-a-deep-dive',
    platform: 'Dev.to',
    image: WestminsterLogo,
  },
  {
    title: 'Advanced TypeScript Tips',
    description: 'Deep dive into advanced TypeScript features and best practices.',
    link: 'https://medium.com/@yourprofile/advanced-typescript-tips',
    platform: 'Medium',
    image: FooterImage,
  },
  {
    title: 'State Management with Redux',
    description: 'Understanding state management using Redux in React.',
    link: 'https://dev.to/yourprofile/state-management-with-redux',
    platform: 'Dev.to',
    image: WestminsterLogo,
  },
  {
    title: 'Building Scalable React Apps',
    description: 'Strategies for building scalable and maintainable React applications.',
    link: 'https://medium.com/@yourprofile/building-scalable-react-apps',
    platform: 'Medium',
    image: FooterImage,
  },
  {
    title: 'CSS Grid vs. Flexbox',
    description: 'Comparing CSS Grid and Flexbox for layout design.',
    link: 'https://dev.to/yourprofile/css-grid-vs-flexbox',
    platform: 'Dev.to',
    image: WestminsterLogo,
  }, {
    title: 'CSS Grid vs. Flexbox',
    description: 'Comparing CSS Grid and Flexbox for layout design.',
    link: 'https://dev.to/yourprofile/css-grid-vs-flexbox',
    platform: 'Dev.to',
    image: WestminsterLogo,
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
        delay: index * 0.1, // Staggered animation
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
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white font-extrabold text-2xl mb-4">Blogs</h1>
        <h2 className="text-5xl font-bold mb-12 text-white">My Articles</h2>
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
