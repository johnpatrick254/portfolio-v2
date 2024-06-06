"use client"
import ProjectCard from '@/components/portfolio/projectcard';
import TransitionContainer from '@/components/transitioncontainer';
import { projects } from '@/lib/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const search = (searchParams.get('filter') as "all" | "collaborations" | "personal") ?? "all"
  const activeProjects = projects.filter(
    (project) => project.category === search,
  );
  return (
    <section className='w-full flex  pt-24 pb-16 min-h-screen bg-gradient-center '>
      <div className="flex  w-full flex-col items-center gap-y-3 max-w-7xl mx-auto md:ml-12  lg:ml-36 2xl:ml-[20%] 3xl:ml-[28%]">
        <nav className="mr-[20%] flex min-h-[26px] w-full justify-center gap-x-4 text-xs font-bold uppercase tracking-wider ">
          <span
            onClick={() => router.push("/projects?filter=all")}
            className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${search === "all" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
          >
            All
          </span>
          <span
            onClick={() => router.push("/projects?filter=personal")}
            className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${search === "personal" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
          >
            Personal
          </span>
          <span
            onClick={() => router.push("/projects?filter=collaborations")}
            className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${search === "collaborations" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
          >
            Collaborations
          </span>
        </nav>

        <TransitionContainer variant="TOP" >
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-normal 2xl:gap-x-6 ">
            {
              search !== "all"
                ?
                activeProjects.map((project) => {
                  return project.projects.map((app, i) => {
                    return (
                      <ProjectCard
                        category={app.category}
                        desc={app.desc}
                        img={app.img}
                        link={app.link}
                        title={app.title}
                        key={app.title}
                        code={app.code}
                      />
                    );
                  });
                })
                : projects.map((project) => {
                  return project.projects.map((app, i) => {
                    return (
                      <ProjectCard
                        category={app.category}
                        desc={app.desc}
                        img={app.img}
                        link={app.link}
                        title={app.title}
                        key={app.title}
                        code={app.code}
                      />
                    );
                  });
                })}
          </div>
        </TransitionContainer>
      </div>
    </section>
  )
}
