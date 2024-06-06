"use client";
import { Caveat } from "next/font/google";
import React, { useState } from "react";
import ProjectCard from "./projectcard";
import { projects } from "@/lib/constants";
import Link from "next/link";
import TransitionContainer from "../transitioncontainer";
const caveat = Caveat({ subsets: ["latin"] });
export default function Portfolio() {
  const [active, setActive] = useState<"all" | "collaborations" | "personal">(
    "all",
  );
  const activeProjects = projects.filter(
    (project) => project.category === active,
  );
  return (
    <section
      id="portfolio"
      className=" flex h-max flex-col items-center justify-center gap-y-10 border-none bg-gradient-top px-8 pb-12"
    >
      <div className="text-center uppercase tracking-wider">
        <h2 className="my-2 text-2xl font-bold">Portfolio</h2>
        <div className="flex items-center justify-center space-x-3 align-middle">
          <p className="text-mainGreen ">my</p>
          <span
            className={`${caveat.className} font-caveat relative bottom-1.5 text-center text-3xl font-extrabold lowercase tracking-normal `}
          >
            Applications
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-3 ">
        <TransitionContainer variant="LEFT">
          <nav className="mx-auto flex min-h-[26px] w-full justify-center gap-x-4 text-xs font-bold uppercase tracking-wider ">
            <span
              onClick={() => setActive("all")}
              className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${active === "all" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
            >
              All
            </span>
            <span
              onClick={() => {
                setActive("personal");
                console.log(activeProjects);
              }}
              className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${active === "personal" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
            >
              Personal
            </span>
            <span
              onClick={() => setActive("collaborations")}
              className={`cursor-pointer pb-2 transition-all duration-100 ease-linear ${active === "collaborations" ? "border-b-2 border-mainGreen text-mainGreen " : ""}`}
            >
              Collaborations
            </span>
          </nav>
        </TransitionContainer>
        <TransitionContainer variant="TOP">
          <div className="flex flex-wrap items-center justify-center gap-3 md:ml-5 md:justify-normal lg:ml-32 lg:gap-6 xl:ml-60 2xl:ml-0 2xl:flex-nowrap">
            {active !== "all"
              ? activeProjects.map((project) => {
                  return project.projects.map((app, i) => {
                    if (i < 4) {
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
                    }
                  });
                })
              : projects.map((project) => {
                  return project.projects.map((app, i) => {
                    if (i < 3) {
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
                    }
                  });
                })}
          </div>
        </TransitionContainer>
        <span className=" hero-pill my-2 flex items-center  justify-center space-x-2 rounded-3xl border-2 border-card-foreground bg-transparent px-6 py-3 text-sm font-bold uppercase shadow-pill transition-shadow duration-200 ease-in-out  hover:shadow-none">
          <Link href={`projects?filter=${active}`}>View More</Link>
        </span>
      </div>
    </section>
  );
}
