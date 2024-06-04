import { SkillSetProps } from "@/components/skills/skillset";
import typescript from "../../public/images/typescript-svgrepo-com.svg"
import php from "../../public/images/php-svgrepo-com.svg"
import js from "../../public/images/brand-javascript-svgrepo-com.svg"
import postgres from "../../public/images/postgresql-logo-svgrepo-com.svg"
import sql from "../../public/images/mysql-svgrepo-com.svg"
import mongo from "../../public/images/mongo-svgrepo-com.svg"
import laravel from "../../public/images/laravel-svgrepo-com.svg"
import nestjs from "../../public/images/nestjs-svgrepo-com.svg"
import express from "../../public/images/express-svgrepo-com.svg"
import prisma from "../../public/images/prisma-svgrepo-com.svg"
import typorm from "../../public/images/logos--typeorm.svg"
import nextjs from "../../public/images/nextjs-fill-svgrepo-com.svg"
import react from "../../public/images/react-svgrepo-com.svg"
import remix from "../../public/images/skill-icons--remix-light.svg"
import redux from "../../public/images/tabler--brand-redux.svg"
import query from "../../public/images/logos--react-query-icon.svg"
import sass from "../../public/images/sass-svgrepo-com.svg"
import tailwind from "../../public/images/tailwindcss-svgrepo-com.svg"
import shadcn from "../../public/images/simple-icons--shadcnui.svg"
import miui from "../../public/images/devicon--materialui.svg"
import slate from "../../public/images/letter-uppercase-circle-s-svgrepo-com.svg"
import native from "../../public/images/tabler--brand-react-native.svg"
import aws from "../../public/images/mdi--aws.svg"
import doc from "../../public/images/gg--digitalocean.svg"
import docker from "../../public/images/mdi--docker.svg"
import git from "../../public/images/bi--git.svg"
import nginx from "../../public/images/fontisto--nginx.svg"
import vercel from "../../public/vercel.svg"
import firebase from "../../public/images/firebase-svgrepo-com.svg"
import { ServiceCardProp } from "@/components/services/ServiceCard";
import { ProjectCardProps } from "@/components/portfolio/projectcard";
import ticket from "../../public/images/tciketss.png"
import { ContactCardProps } from "@/components/contact/contactcard";
import { Mail, Map, User, Contact } from "lucide-react";

export const services: ServiceCardProp[] = [
    {
        category: 'Web Development',
        title: "Backend Development",
        desc: "Expert in building robust and scalable server-side applications with efficient database management."
    },
    {
        category: 'Web Development',
        title: "Frontend Development",
        desc: "Skilled in creating responsive and interactive user interfaces using the latest web technologies."
    },
    {
        category: 'Mobile Development',
        title: "Mobile Development",
        desc: "Proficient in developing high-performance mobile applications for both Android and iOS platforms."
    },
];


export const skillSets: SkillSetProps[] = [
    {
        name: "Languages",
        data: [
            {
                name: "PHP",
                src: php,
                desc: "PHP is a general-purpose scripting language geared towards web development."
            },
            {
                name: "Typescript",
                src: typescript,
                desc: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript"
            },
            {
                name: "Javascript",
                src: js,
                desc: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS"
            },
        ]
    },
    {
        name: "Backend stack",
        data: [
            {
                name: "Laravel",
                src: laravel,
                desc: "Laravel is a free and open-source PHP-based web framework for building high-end web applications."
            },
            {
                name: "Nestjs",
                src: nestjs,
                desc: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications."
            },
            {
                name: "Express",
                src: express,
                desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License."
            },
            {
                name: "Firebase",
                src: firebase,
                desc: "Firebase is a set of backend cloud computing services and application development platforms provided by Google."
            },
        ]
    },
    {
        name: "Databases",
        data: [
            {
                name: "Postgresql",
                src: postgres,
                desc: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance."
            },
            {
                name: "MYSQL",
                src: sql,
                desc: "MySQL is an open-source relational database management system."
            },
            {
                name: "mongoDB",
                src: mongo,
                desc: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas."
            },
            {
                name: "Prisma ORM",
                src: prisma,
                desc: "Prisma is an open-source ORM (Object-Relational Mapping) tool that provides a type-safe and intuitive way of accessing databases."
            },
            {
                name: "TypeORM",
                src: typorm,
                desc: "TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES2021)"
            },
            {
                name: "Eloquent ORM",
                src: laravel,
                desc: "The Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database."
            },
        ]
    },
    {
        name: "Frontend stack",
        data: [
            {
                name: "Nextjs",
                src: nextjs,
                desc: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation."
            },
            {
                name: "Remixjs",
                src: remix,
                desc: "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience."
            },
            {
                name: "Reactjs",
                src: react,
                desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components"
            },
            {
                name: "Blade",
                src: laravel,
                desc: "Blade is the simple, yet powerful templating engine provided with Laravel"
            },
            {
                name: "Tailwind",
                src: tailwind,
                desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML."
            },
            {
                name: "Sass",
                src: sass,
                desc: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
            },
            {
                name: "Redux Toolkit",
                src: redux,
                desc: "Redux is an open-source JavaScript library for managing and centralizing application state"
            },
            {
                name: "Tanstack Query",
                src: query,
                desc: "TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences."
            },
            {
                name: "shadcn/UI",
                src: shadcn,
                desc: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
            },
            {
                name: "Material UI",
                src: miui,
                desc: "Material UI offers a wide variety of high quality components that have allowed us to ship features faster."
            },
            {
                name: "Slatejs",
                src: slate,
                desc: "Slate is a completely customizable framework for building rich text editors"
            },
        ]
    },
    {
        name: "Mobile Development",
        data: [
            {
                name: "React Native Expo",
                src: native,
                desc: "Expo and EAS are,an ecosystem of tools that help you develop review and deploy universal native apps with React that run on Android, iOS, and the web.Iterate with confidence."
            },
        ]
    },
    {
        name: "Deployment and Tools",
        data: [
            {
                name: "Git",
                src: git,
                desc: "Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers collaboratively developing software."
            },
            {
                name: "Docker",
                src: docker,
                desc: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."
            },
            {
                name: "Nginx",
                src: nginx,
                desc: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."
            },
            {
                name: "AWS",
                src: aws,
                desc: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis"
            },
            {
                name: "Digital Ocean",
                src: doc,
                desc: "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs"
            },
            {
                name: "Vercel",
                src: vercel,
                desc: "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web"
            },
        ]
    },
];

export const projects: { category: "personal" | "all" | "collaborations", projects: ProjectCardProps[] }[] = [
    {
        category: 'personal',
        projects: [
            {
                category: 'personal',
                desc: "A ticket based helpdesk webapp built with Nextjs frontend and php backend where users can raise support tickets",
                img: ticket,
                link: "https://ticket-helpdesk-sigma.vercel.app",
                title: "Ticket Helpdesk"
            },
            {
                category: 'personal',
                desc: "A food ordering mobile app built with react-native/expo for ordering food from vendors displayed on a map and pay with cards",
                img: ticket,
                link: "https://github.com/johnpatrick254/GoMeals",
                title: "Go Meals"
            },
        ]
    },
    {
        category: 'collaborations',
        projects: [
            {
                category: 'Collaboration',
                desc: "A simple school management system with dashboards for admins,staff and students. Built with Nestjs and Nextjs",
                img: ticket,
                link: "https://quantum-school-management-system.vercel.app/",
                title: "School Management System"
            },
        ]
    },
]

export const contacts: ContactCardProps[] = [
    {
        title: "Address",
        description: "53260-00200 Nairobi,Kenya",
        Icon: Map
    },
    {
        title: "Freelance",
        description: "Available right now",
        Icon: User
    },
    {
        title: "Email",
        description: "jpattrick538@gmail.com",
        Icon: Mail
    },
    {
        title: "Phone",
        description: "+254 741 294 298",
        Icon: Contact
    },
]