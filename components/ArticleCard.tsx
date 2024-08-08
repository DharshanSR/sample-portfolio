'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import useProjectInView from '@/hooks/useProjectInView';

interface Article {
  title: string;
  description: string;
  link: string;
  platform: string;
  image: StaticImageData | string; // Use StaticImageData for imported images or string for URLs
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ArticleCard: React.FC<{ article: Article; index: number }> = ({ article, index }) => {
  const { ref, inView } = useProjectInView();

  return (
    <motion.div
      ref={ref}
      className="cursor-pointer bg-gray-800 p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md cursor-pointer">
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
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
  );
};

export default ArticleCard;
