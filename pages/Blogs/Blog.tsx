// src/components/Blog.tsx

import React from 'react';

interface Article {
  title: string;
  description: string;
  link: string;
  platform: string;
}

const articles: Article[] = [
  {
    title: 'Understanding TypeScript',
    description: 'A comprehensive guide to getting started with TypeScript.',
    link: 'https://medium.com/@yourprofile/understanding-typescript',
    platform: 'Medium',
  },
  {
    title: 'React Hooks: A Deep Dive',
    description: 'Exploring the powerful world of React Hooks.',
    link: 'https://dev.to/yourprofile/react-hooks-a-deep-dive',
    platform: 'Dev.to',
  },
  // Add more articles here
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Articles</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more on {article.platform}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
