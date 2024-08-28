import { StaticImageData } from 'next/image';

export interface Skill {
  name: string;
  image: StaticImageData | string; // Use StaticImageData for imported images or string for URLs
}

export const skillsData: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'HTML',
      image: '/path/to/html-logo.png', // Replace with actual path or URL
    },
    {
      name: 'CSS',
      image: '/path/to/css-logo.png', // Replace with actual path or URL
    },
    {
      name: 'JavaScript',
      image: '/path/to/javascript-logo.png', // Replace with actual path or URL
    },
    {
      name: 'React',
      image: '/path/to/react-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Next.js',
      image: '/path/to/nextjs-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Tailwind CSS',
      image: '/path/to/tailwindcss-logo.png', // Replace with actual path or URL
    },
    {
      name: 'React Native',
      image: '/path/to/reactnative-logo.png', // Replace with actual path or URL
    },
    {
      name: 'TypeScript',
      image: '/path/to/typescript-logo.png', // Replace with actual path or URL
    },
  ],
  
  Backend: [
    {
      name: 'Java',
      image: '/path/to/java-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Node.js',
      image: '/path/to/nodejs-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Express.js',
      image: '/path/to/express-logo.png', // Replace with actual path or URL
    },
    {
      name: 'NPM',
      image: '/path/to/npm-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Nodemon',
      image: '/path/to/nodemon-logo.png', // Replace with actual path or URL
    },
  ],  
  Cloud: [
    {
      name: 'AWS',
      image: '/path/to/aws-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Microsoft Azure',
      image: '/path/to/azure-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Google Cloud Platform',
      image: '/path/to/gcp-logo.png', // Replace with actual path or URL
    },
    {
      name: 'IBM Cloud',
      image: '/path/to/ibmcloud-logo.png', // Replace with actual path or URL
    },
  ],
  Hosting: [
    {
      name: 'Netlify',
      image: '/path/to/netlify-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Vercel',
      image: '/path/to/vercel-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Heroku',
      image: '/path/to/heroku-logo.png', // Replace with actual path or URL
    },
    {
      name: 'GitHub Pages',
      image: '/path/to/github-pages-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Render',
      image: '/path/to/github-pages-logo.png', // Replace with actual path or URL
    },
  ],
  
  IDE: [
    {
      name: 'Visual Studio Code',
      image: '/path/to/vscode-logo.png', // Replace with actual path or URL
    },
    {
      name: 'IntelliJ IDEA',
      image: '/path/to/intellij-logo.png', // Replace with actual path or URL
    },
    {
      name: 'PyCharm',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'WebStorm',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'RStudio',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'Android Studio',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },
    
  ],Database: [
    {
      name: 'Visual Studio Code',
      image: '/path/to/vscode-logo.png', // Replace with actual path or URL
    },
    {
      name: 'IntelliJ IDEA',
      image: '/path/to/intellij-logo.png', // Replace with actual path or URL
    },
    {
      name: 'PyCharm',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'WebStorm',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'RStudio',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },{
      name: 'Android Studio',
      image: '/path/to/pycharm-logo.png', // Replace with actual path or URL
    },
    
  ],
  Tools: [
    {
      name: 'Git',
      image: '/path/to/git-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Docker',
      image: '/path/to/docker-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Kubernetes',
      image: '/path/to/kubernetes-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Webpack',
      image: '/path/to/webpack-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Jenkins',
      image: '/path/to/jenkins-logo.png', // Replace with actual path or URL
    },
    {
      name: 'ESLint',
      image: '/path/to/eslint-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Prettier',
      image: '/path/to/prettier-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Figma',
      image: '/path/to/figma-logo.png', // Replace with actual path or URL
    },
    //we should add more
  ],
  "Machine Learning": [
    {
      name: 'Git',
      image: '/path/to/git-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Docker',
      image: '/path/to/docker-logo.png', // Replace with actual path or URL
    },
    {
      name: 'Kubernetes',
      image: '/path/to/kubernetes-logo.png', // Replace with actual path or URL
    },
  ],
};
