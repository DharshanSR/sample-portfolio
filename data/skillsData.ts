import { StaticImageData } from 'next/image';

//frontend
import htmlIcon from '@/assests/frontend/html5-original.svg';
import cssIcon from '@/assests/frontend/css3-original.svg';
import javascriptIcon from '@/assests/frontend/javascript-original.svg';
import reactIcon from '@/assests/frontend/react-original.svg';
import nextjsIcon from '@/assests/frontend/nextjs-original.svg';
import tailwindcssIcon from '@/assests/frontend/tailwindcss-original.svg';
import reactNativeIcon from '@/assests/frontend/react-original.svg';
import threejsIcon from '@/assests/frontend/threejs-original.svg';
import typescriptIcon from '@/assests/frontend/typescript-original.svg';

//backend
import nodejsIcon from '@/assests/backend/nodejs-original.svg';
import expressIcon from '@/assests/backend/express-original.svg';
import javaIcon from '@/assests/backend/java-original.svg';
import npmIcon from '@/assests/backend/npm-original-wordmark.svg';
import jsonIcon from '@/assests/backend/json-original.svg';

//hosting
import vercelIcon from '@/assests/hosting/vercel-original.svg';
import netlifyIcon from '@/assests/hosting/netlify-original.svg';
import herokuIcon from '@/assests/hosting/heroku-logo-svgrepo-com.svg';
import renderIcon from '@/assests/hosting/render.png';

//ides
import androidstudioIcon from '@/assests/ides/androidstudio-original.svg';
import vscodeIcon from '@/assests/ides/vscode-original.svg';
import intellijIcon from '@/assests/ides/intellij-original.svg';
import pycharmIcon from '@/assests/ides/pycharm-original.svg';
import rstudioIcon from '@/assests/ides/rstudio-original.svg';
import webstormIcon from '@/assests/ides/webstorm-original.svg';
export interface Skill {
  name: string;
  image: StaticImageData | string; // Use StaticImageData for imported images or string for URLs
}

export const skillsData: Record<string, Skill[]> = {
  Frontend: [
    {
      name: 'HTML',
      image: htmlIcon, // Replace with actual path or URL
    },
    {
      name: 'CSS3',
      image: cssIcon, // Replace with actual path or URL
    },
    {
      name: 'JavaScript',
      image: javascriptIcon, // Replace with actual path or URL
    },
    {
      name: 'React',
      image: reactIcon, // Replace with actual path or URL
    },
    {
      name: 'Next.js',
      image: nextjsIcon, // Replace with actual path or URL
    },
    {
      name: 'Tailwind CSS',
      image: tailwindcssIcon, // Replace with actual path or URL
    },
    {
      name: 'React Native',
      image: reactNativeIcon, // Replace with actual path or URL
    },
    {
      name: 'TypeScript',
      image: typescriptIcon, // Replace with actual path or URL
    },
    {
      name: 'Three js',
      image: threejsIcon, // Replace with actual path or URL
    },
  ],
  
  Backend: [
    {
      name: 'Java',
      image: javaIcon, // Replace with actual path or URL
    },
    {
      name: 'Node.js',
      image: nodejsIcon, // Replace with actual path or URL
    },
    {
      name: 'Express.js',
      image: expressIcon, // Replace with actual path or URL
    },
    {
      name: 'NPM',
      image: npmIcon, // Replace with actual path or URL
    },
    {
      name: 'JSON',
      image: jsonIcon, // Replace with actual path or URL
    },
  ],  
  Hosting: [
    {
      name: 'Netlify',
      image: netlifyIcon, // Replace with actual path or URL
    },
    {
      name: 'Vercel',
      image: vercelIcon, // Replace with actual path or URL
    },
    {
      name: 'Heroku',
      image: herokuIcon, // Replace with actual path or URL
    },
    {
      name: 'Render',
      image: renderIcon, // Replace with actual path or URL
    },
  ],
  
  IDE: [
    {
      name: 'Visual Studio Code',
      image: vscodeIcon, // Replace with actual path or URL
    },
    {
      name: 'IntelliJ IDEA',
      image: intellijIcon, // Replace with actual path or URL
    },
    {
      name: 'PyCharm',
      image: pycharmIcon, // Replace with actual path or URL
    },{
      name: 'WebStorm',
      image: webstormIcon, // Replace with actual path or URL
    },{
      name: 'RStudio',
      image: rstudioIcon, // Replace with actual path or URL
    },{
      name: 'Android Studio',
      image: androidstudioIcon, // Replace with actual path or URL
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
