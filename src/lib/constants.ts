import { SkillSetProps } from "@/components/skills/skillset";
import typescript from "../../public/images/typescript-svgrepo-com.svg";
import python from "../../public/images/python-svgrepo-com.svg";
import neo4j from "../../public/images/Neo4j.svg";
import kaggle from "../../public/images/kaggle-svgrepo-com.svg";
import openAI from "../../public/images/openai-svgrepo-com.svg";
import anthropic from "../../public/images/anthropic.svg";
import langchain from "../../public/images/langchain-seeklogo.svg";
import php from "../../public/images/php-svgrepo-com.svg";
import js from "../../public/images/brand-javascript-svgrepo-com.svg";
import postgres from "../../public/images/postgresql-logo-svgrepo-com.svg";
import sql from "../../public/images/mysql-svgrepo-com.svg";
import mongo from "../../public/images/mongo-svgrepo-com.svg";
import laravel from "../../public/images/laravel-svgrepo-com.svg";
import nestjs from "../../public/images/nestjs-svgrepo-com.svg";
import express from "../../public/images/express-svgrepo-com.svg";
import prisma from "../../public/images/prisma-svgrepo-com.svg";
import typorm from "../../public/images/logos--typeorm.svg";
import nextjs from "../../public/images/nextjs-fill-svgrepo-com.svg";
import react from "../../public/images/react-svgrepo-com.svg";
import remix from "../../public/images/skill-icons--remix-light.svg";
import redux from "../../public/images/tabler--brand-redux.svg";
import query from "../../public/images/logos--react-query-icon.svg";
import sass from "../../public/images/sass-svgrepo-com.svg";
import tailwind from "../../public/images/tailwindcss-svgrepo-com.svg";
import shadcn from "../../public/images/simple-icons--shadcnui.svg";
import miui from "../../public/images/devicon--materialui.svg";
import slate from "../../public/images/letter-uppercase-circle-s-svgrepo-com.svg";
import native from "../../public/images/tabler--brand-react-native.svg";
import aws from "../../public/images/mdi--aws.svg";
import css from "../../public/images/css3-01-svgrepo-com.svg";
import doc from "../../public/images/gg--digitalocean.svg";
import docker from "../../public/images/mdi--docker.svg";
import git from "../../public/images/bi--git.svg";
import nginx from "../../public/images/fontisto--nginx.svg";
import vercel from "../../public/vercel.svg";
import firebase from "../../public/images/firebase-svgrepo-com.svg";
import { ServiceCardProp } from "@/components/services/ServiceCard";
import { ProjectCardProps } from "@/components/portfolio/projectcard";
import alpine from "../../public/images/Alpine.js.svg";
import { ContactCardProps } from "@/components/contact/contactcard";
import { Mail, Map, User, Contact } from "lucide-react";


import ecom from "../../public/images/portfolio/ecommerce.png";
import ticket from "../../public/images/portfolio/ticket.png";
import frontend from "../../public/images/portfolio/frontendlanding.png";
import gomeal from "../../public/images/portfolio/gomeal.png";
import google from "../../public/images/portfolio/google clone.png";
import jobboard from "../../public/images/portfolio/jobboards.png";
import school from "../../public/images/portfolio/school-landing.png";
import taskmanager from "../../public/images/portfolio/taskmanager.png";
import { ResumeCardProps } from "@/components/resume/resumecard";
import chat1 from "../../public/images/portfolio/chat1.png";
import chat2 from "../../public/images/portfolio/chat2.png";
import chat3 from "../../public/images/portfolio/chat3.png"

export const services: ServiceCardProp[] = [
  {
    category: "Web Development",
    title: "Backend Development",
    desc: "Expert in building robust and scalable server-side applications with efficient database management.",
  },
  {
    category: "Web Development",
    title: "Frontend Development",
    desc: "Skilled in creating responsive and interactive user interfaces using the latest web technologies.",
  },
  {
    category: "Mobile Development",
    title: "Mobile Development",
    desc: "Proficient in developing high-performance mobile applications for both Android and iOS platforms.",
  },
];

export const skillSets: SkillSetProps[] = [
  {
    name: "Languages",
    data: [
      {
        name: "Python",
        src: python,
        desc: "Python is a high-level, general-purpose programming language.",
      },
      {
        name: "Typescript",
        src: typescript,
        desc: "TypeScript is a  high-level programming language that adds static typing with optional type annotations to JavaScript.",
      },
      {
        name: "PHP",
        src: php,
        desc: "PHP is a general-purpose scripting language geared towards web development.",
      },
      {
        name: "Javascript",
        src: js,
        desc: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.",
      },
      {
        name: "CSS",
        src: css,
        desc: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
      },
    ],
  },
  {
    name: "Backend stack",
    data: [
      {
        name: "Laravel",
        src: laravel,
        desc: "Laravel is a free and open-source PHP-based web framework for building high-end web applications.",
      },
      {
        name: "Nestjs",
        src: nestjs,
        desc: "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
      },
      {
        name: "Express",
        src: express,
        desc: "Express.js is a back-end web application framework for building RESTful APIs with Node.js.",
      },
      {
        name: "Firebase",
        src: firebase,
        desc: "Firebase is a set of backend cloud computing services and application development platforms provided by Google.",
      },
    ],
  },
  {
    name: "Gen-AI",
    data: [
      {
        name: "Neo4j ",
        src: neo4j,
        desc: "A graph database as a service solution for developers building graph-powered AI applications on Azure from Neo4j",
      },
      {
        name: "Langchain",
        src: langchain,
        desc: "Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.",
      },
      {
        name: "Kaggle",
        src: kaggle,
        desc: "Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.",
      },
      {
        name: "OpenAI",
        src: openAI,
        desc: "",
      },
      {
        name: "Anthropic",
        src: anthropic,
        desc: "Firebase is a set of backend cloud computing services and application development platforms provided by Google.",
      },
    ],
  },
  {
    name: "Databases",
    data: [
      {
        name: "Postgresql",
        src: postgres,
        desc: "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      },
      {
        name: "MYSQL",
        src: sql,
        desc: "MySQL is an open-source relational database management system.",
      },
            {
        name: "mongoDB",
        src: mongo,
        desc: "MongoDB is a NoSQL document-oriented database program that utilizes JSON-like documents with optional schemas.",
      },
      {
        name: "Prisma ORM",
        src: prisma,
        desc: "Prisma is an open-source ORM (Object-Relational Mapping) tool that provides a type-safe and intuitive way of accessing databases.",
      },
      {
        name: "TypeORM",
        src: typorm,
        desc: "TypeORM is a type-safe ORM that can be used with TypeScript and JavaScript (ES2021).",
      },
      {
        name: "Eloquent",
        src: laravel,
        desc: "Eloquent ORM included with Laravel provides a simple ActiveRecord implementation for working with your database.",
      },
    ],
  },
  {
    name: "Frontend stack",
    data: [
      {
        name: "Nextjs",
        src: nextjs,
        desc: "Next.js is a web framework providing React-based web applications with server-side rendering and static website generation.",
      },
      {
        name: "Remixjs",
        src: remix,
        desc: "Remix is a full stack web framework with server-side rendering and static website generation.",
      },
      {
        name: "Reactjs",
        src: react,
        desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      },
      {
        name: "Blade",
        src: laravel,
        desc: "Blade is the simple, yet powerful templating engine provided with Laravel.",
      },
      {
        name: "Tailwind",
        src: tailwind,
        desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
      },
      {
        name: "Sass",
        src: sass,
        desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
      },
      {
        name: "Redux Toolkit",
        src: redux,
        desc: "Redux is an open-source JavaScript library for managing and centralizing application state.",
      },
      {
        name: "Tanstack Query",
        src: query,
        desc: "TanStack Query is state management library for React based apps.",
      },
      {
        name: "shadcn/UI",
        src: shadcn,
        desc: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
      },
      {
        name: "Material UI",
        src: miui,
        desc: "Material UI offers a wide variety of high-quality components that have allowed us to ship features faster.",
      },
      {
        name: "Slatejs",
        src: slate,
        desc: "Slate is a completely customizable framework for building rich text editors.",
      },
      {
        name: "AlpineJs",
        src: alpine,
        desc: "Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web.",
      },
    ],
  },
  {
    name: "Mobile Development",
    data: [
      {
        name: "React Native",
        src: native,
        desc: "Expo and EAS are an ecosystem of tools used for developing universal native apps with React that run on Android, iOS, and the web.",
      },
    ],
  },
  {
    name: "Deployment and Tools",
    data: [
      {
        name: "Git",
        src: git,
        desc: "Git is a distributed version control system used to control source code by programmers collaboratively developing software.",
      },
      {
        name: "Docker",
        src: docker,
        desc: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.",
      },
      {
        name: "Nginx",
        src: nginx,
        desc: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache.",
      },
      {
        name: "AWS",
        src: aws,
        desc: "Amazon Web Services provides on-demand cloud computing platforms and APIs on a metered, pay-as-you-go basis.",
      },
      {
        name: "Digital Ocean",
        src: doc,
        desc: "DigitalOcean provides simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      },
      {
        name: "Vercel",
        src: vercel,
        desc: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web.",
      },
    ],
  },
];

export const projects: {
  category: "personal" | "all" | "collaborations";
  projects: ProjectCardProps[];
}[] = [
    {
      category: "personal",
      projects: [
        {
          category: "personal",
          desc: "Simple graph powered movie wiki with GraphRAG powered AI chatbot",
          img: chat2,
          link: "https://neo4-wiki.vercel.app/",
          title: "AI powered Movie Wiki",
          code: "https://github.com/johnpatrick254/neo4j-movie-wiki",
        },
        {
          category: "personal",
          desc: "Simple dashboard where e-commerce vendors can manage there products built with Express and React",
          img: ecom,
          link: "https://e-commerce-dashboard-rh94.vercel.app/login",
          title: "E-commerce Dashboard",
          code: "https://github.com/johnpatrick254/E-Commerce-Dashboard",
        },
        {
          category: "personal",
          desc: "A ticket based helpdesk webapp built with Nextjs and php backend where users can raise support tickets",
          img: ticket,
          link: "https://ticket-helpdesk-sigma.vercel.app",
          title: "Ticket Helpdesk",
          code: "https://github.com/johnpatrick254/ticket-helpdesk",
        },
        {
          category: "personal",
          desc: "A mobile app built with react-native/expo and firebasefor ordering food from vendors displayed on a map and pay with cards",
          img: gomeal,
          link: "https://github.com/johnpatrick254/GoMeals",
          code: "https://github.com/johnpatrick254/GoMeals",
          title: "Go Meals",
        },
        {
          category: "personal",
          desc: "A job board built with laravel that allows employers to list jobs and applicants to submit their CVs and receive email notifications",
          img: jobboard,
          link: "https://job-board-2evd.onrender.com/",
          title: "Job Board",
          code: "https://github.com/johnpatrick254/Laravel-job-board",
        },
        {
          category: "personal",
          desc: "My submission to the frontend mentor landing page challenge built wit HTML,JS and CSS",
          img: frontend,
          code: "https://github.com/johnpatrick254/FrontendMentor-NewsHomePage",
          link: "https://johnpatrick254.github.io/FrontendMentor-NewsHomePage/",
          title: "Landing Page",
        },
        {
          category: "personal",
          desc: "A simple task manager built with React and PHP backend and mySQL",
          img: taskmanager,
          link: "https://light-hall-task-manager.vercel.app/",
          title: "Task manager",
          code: "https://github.com/johnpatrick254/Light-Hall-Task-Manager",
        },
        {
          category: "personal",
          desc: "A clone of google's task keeper app built with React",
          img: google,
          link: "https://johnpatrick254.github.io/Google-Keeper-To-Do-List-Clone/",
          title: "Google Keeper Clone",
          code: "https://github.com/johnpatrick254/Google-Keeper-To-Do-List-Clone",
        },
      ],
    },
    {
      category: "collaborations",
      projects: [
        {
          category: "Collaboration",
          desc: "A simple school management system with dashboards for admins,staff and students. Built with Nestjs and Nextjs",
          img: school,
          link: "https://quantum-school-management-system.vercel.app/",
          title: "School Management System",
          code: "https://github.com/johnpatrick254/School-Management-System-Server",
        },
      ],
    },
  ];

export const contacts: ContactCardProps[] = [
  {
    title: "Address",
    description: "53260-00200, Nairobi.",
    Icon: Map,
  },
  {
    title: "Freelance",
    description: "Available right now",
    Icon: User,
  },
  {
    title: "Email",
    description: "jpattrick538@gmail.com",
    Icon: Mail,
  },
  {
    title: "Phone",
    description: "+254 741 294 298",
    Icon: Contact,
  },
];

export const educations: ResumeCardProps[] = [
  {
    index: 0,
    title: "Neo4j and LLM Fundamentals",
    desc: " Learnt how to integrate Neo4j with Generative AI models using Langchain.",
    institute: "Neo4j GraphAcademy",
    start: "August 2024",
    end: "August 2024",
  },
  {
    index: 1,
    title: "Fullstack Web Development",
    desc: "Studying fullstack web development through online tutorials and practice",
    institute: "Self Learning",
    start: "March 2023",
    end: null,
  },
  {
    index: 2,
    title: "Frontend Web Development",
    desc: "Studied web frontend development through online tutorials and practice",
    institute: "Self Learning",
    start: "December 2022",
    end: "February 2023",
  },
  {
    index: 3,
    title: "Bsc Biotechnology",
    desc: "Completed a degree in Biotechnology",
    institute: "Masinde Muliro University of Science and Technology",
    start: 2014,
    end: 2018,
  },
];

export const experiences: ResumeCardProps[] = [
  {
    index: 0,
    title: "Fullstack AI integration Developer",
    desc: "Built an AI powered social events aggragator site using FastAPI server and Nextjs client",
    institute: "Decko",
    start: "January 2025",
    end:null
  },
   {
    index: 1,
    title: "Fullstack Developer",
    desc: "Developed and optimized E-commerce projects across multiple platforms like Shopify, Magento and custom Nextjs/Remix based e-commerce platforms, ensuring compatibility, performance improvements, and a streamlined user experience that boosted sales by 25%. Specialized in theme development, CSS optimization, and reducing database requests, achieving up to 40% improvement in Core Web Vitals and a 20% reduction in page load time",
    institute: "Scandiweb",
    start: "July 2024",
    end: null
  },
   {
    index: 2,
    title: "Fullstack Developer",
    desc: "Utilized Langchain, Neo4J, Kaggle and anthropic models to develop AI powered applications running on Nodejs and Nextjs",
    institute: "LatentAIM",
    start: "August 2024",
    end:"December 2024"
  },
  {
    index: 3,
    title: "Frontend Developer",
    desc: "Built a responsive rich text editor using Platejs",
    institute: "Godoco",
    start: "April 2024",
    end: "May 2024",
  },
  {
    index: 4,
    title: "React Developer",
    desc: "Developed a responsive rich text editor using Reactjs",
    institute: "DoWell Research GmbH, Germany",
    start: "July 2023",
    end: "April 2024",
  },
  {
    index: 5,
    title: "Data Entry Specialist",
    desc: "Managed data entry tasks with precision",
    institute: "CloudFactory",
    start: "January 2021",
    end: "December 2023",
  },
  {
    index: 6,
    title: "Quality Control Analyst",
    desc: "Conducted quality control tests and analysis",
    institute: "Larbcorpt Laboratories and Supplies",
    start: "April 2017",
    end: "August 2019",
  },
];

export const cvLink = "https://drive.google.com/file/d/1rbPsP9C3TfvD5-tclCVSEP28_Lp8vwV1/view?usp=sharing"
