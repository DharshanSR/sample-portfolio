'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import FooterImage from '@/images/Footer.jpg';
import WestminsterLogo from '@/images/westminster_logo.png';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Article {
  title: string;
  description: string;
  link: string;
  platform: string;
  image: StaticImageData | string; // Use StaticImageData for imported images or string for URLs
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
  },{
    title: 'Building Scalable React Apps',
    description: 'Strategies for building scalable and maintainable React applications.',
    link: 'https://medium.com/@yourprofile/building-scalable-react-apps',
    platform: 'Medium',
    image: FooterImage,
  },{
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
  },
];

const Blog: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of visible posts

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8); // Load more posts
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Use `useInView` to track when the section is in view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // When 20% of the element is visible
  });

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h1 className='text-white font-extrabold text-1xl mb-4'>Blogs</h1>
        <h1 className="text-5xl font-bold mb-8 text-center text-white">My Articles</h1>
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {articles.slice(0, visibleCount).map((article, index) => (
            <motion.div
              key={index}
              className="cursor-pointer bg-gray-800 p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md cursor-pointer">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">{article.title}</h2>
              <p className="text-white mb-4">{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button className="transition-colors duration-300 ease-in-out hover:bg-blue-600 text-green-300">
                  Read more on {article.platform}
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
        {visibleCount < articles.length && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
