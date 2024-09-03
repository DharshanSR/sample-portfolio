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
import pythonIcon from '@/assests/backend/python-svgrepo-com.svg';

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

//database
import mongodbIcon from '@/assests/database/mongodb-original.svg';
import mysqlIcon from '@/assests/database/mysql-original.svg';
import postgresIcon from '@/assests/database/postgresql-original.svg';
import firebaseIcon from '@/assests/database/firebase-original.svg';
import appwriteIcon from '@/assests/database/appwrite-original.svg';

//tools and technologies
import dockerIcon from '@/assests/tools&technologies/docker-original.svg';
import gitIcon from '@/assests/tools&technologies/git-original.svg';
import githubIcon from '@/assests/tools&technologies/github-original.svg';
import sentryIcon from '@/assests/tools&technologies/sentry-original.svg';
import canvaIcon from '@/assests/tools&technologies/canva.png';
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
      name: 'Python',
      image: pythonIcon, // Replace with actual path or URL
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
    // {
    //   name: 'PyCharm',
    //   image: pycharmIcon, // Replace with actual path or URL
    // },
    {
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
      name: 'Mongo DB',
      image: mongodbIcon, // Replace with actual path or URL
    },
    {
      name: 'My SQL',
      image: mysqlIcon, // Replace with actual path or URL
    },
    {
      name: 'PostgreSql',
      image: postgresIcon, // Replace with actual path or URL
    },{
      name: 'Firebase',
      image: firebaseIcon, // Replace with actual path or URL
    },{
      name: 'Appwrite',
      image: appwriteIcon, // Replace with actual path or URL
    },
  ],
  Tools: [
    {
      name: 'Git',
      image: gitIcon, // Replace with actual path or URL
    },
    {
      name: 'Docker',
      image: dockerIcon, // Replace with actual path or URL
    },
    {
      name: 'GitHub',
      image: githubIcon, // Replace with actual path or URL
    },
    {
      name: 'Sentry',
      image: sentryIcon, // Replace with actual path or URL
    },
    {
      name: 'Canva',
      image: canvaIcon, // Replace with actual path or URL
    },
    //we should add more
  ],
};
