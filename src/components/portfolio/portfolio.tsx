"use client"
import { Caveat } from 'next/font/google';
import React, { useState } from 'react'
import ProjectCard from './projectcard';
import { projects } from '@/lib/constants';
import Link from 'next/link';
const caveat = Caveat({ subsets: ["latin"] });
export default function Portfolio() {
    const [active, setActive] = useState<"all" | "collaborations" | "personal">("all")
    const activeProjects = projects.filter(project => project.category === active);
    return (
        <section id='portfolio' className=' bg-gradient-top flex flex-col h-max justify-center items-center w-full border-none gap-y-10 pb-12 px-0' >
            <div className='uppercase text-center tracking-wider'>
                <h2 className='font-bold text-2xl my-2'>Portfolio</h2>
                <div className='flex space-x-3 items-center justify-center align-middle'>
                    <p className='text-mainGreen '>my</p>
                    <span
                        className={`${caveat.className} font-caveat relative bottom-1.5 text-3xl text-center font-extrabold lowercase tracking-normal `}
                    >
                        Applications
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-y-3 w-full justify-center items-center'>
                <nav className='flex min-h-[26px] text-xs uppercase justify-center mx-auto font-bold w-full gap-x-4 tracking-wider '>
                    <span onClick={() => setActive('all')} className={`transition-all ease-linear duration-100 pb-2 cursor-pointer ${active === "all" ? "text-mainGreen border-b-2 border-mainGreen " : ""}`}>All</span>
                    <span onClick={() => setActive('personal')} className={`transition-all ease-linear duration-100 pb-2 cursor-pointer ${active === "personal" ? "text-mainGreen border-b-2 border-mainGreen " : ""}`}>Personal</span>
                    <span onClick={() => setActive('collaborations')} className={`transition-all ease-linear duration-100 pb-2 cursor-pointer ${active === "collaborations" ? "text-mainGreen border-b-2 border-mainGreen " : ""}`}>Collaborations</span>
                </nav>
                <div className='flex flex-wrap gap-3 justify-center items-center px-3'>
                    {
                        (active  !== "all")
                        ?
                        activeProjects.map(project => {
                            return project.projects.map((app,i) => {
                                if(i >= 4) return null;
                                return <ProjectCard
                                    category={app.category}
                                    desc={app.desc}
                                    img={app.img}
                                    link={app.link}
                                    title={app.title}
                                    key={app.title}
                                />
                            })
                        }
                        )
                        :
                        projects.map(project=>{
                            return project.projects.map((app,i) => {
                                if (i >= 4) return null;
                                return <ProjectCard
                                    category={app.category}
                                    desc={app.desc}
                                    img={app.img}
                                    link={app.link}
                                    title={app.title}
                                    key={app.title}
                                />
                            })
                        })
                    }
                </div>
                <span className=" uppercase text-sm transition-shadow duration-200  ease-in-out hero-pill my-2 flex items-center justify-center space-x-2 rounded-3xl border-2 border-card-foreground bg-transparent px-6 py-3 font-bold shadow-pill  hover:shadow-none">
                    <Link
                        href={`projects?filter=${active}`}
                    >
                        View More
                    </Link>
                </span>
            </div>
        </section>
    )
}
