import { Caveat } from "next/font/google";
import React from "react";
import ResumeCard from "./resumecard";
import Link from "next/link";
import TransitionContainer from "../transitioncontainer";
const caveat = Caveat({ subsets: ["latin"] });
export default function Resume() {
  return (
    <section id="resume" className="h-max w-full bg-gradient-bottom ">
      <div className="h-max w-full px-8 pb-12 pt-1 xl:px-20 2xl:px-[18%]">
        <div className="text-center uppercase tracking-wider">
          <h2 className="my-2 text-2xl font-bold">Resume</h2>
          <div className="flex items-center justify-center space-x-3 align-middle">
            <p className="text-mainGreen ">my</p>
            <span
              className={`${caveat.className} font-caveat relative bottom-1.5 text-center text-3xl font-extrabold lowercase tracking-normal `}
            >
              Story
            </span>
          </div>
        </div>
        <div className="w-full md:flex md:flex-row   ">
          <TransitionContainer variant="LEFT">
            <div className="flex w-full flex-col items-center justify-center p-8">
              <div className=" w-full border-b-2 border-card-foreground pb-5 text-2xl font-bold tracking-wider dark:border-[#a3a5a7]">
                <h3 className="mx-auto w-max">Education</h3>
              </div>
              <ResumeCard index={0} key={1} />
              <ResumeCard index={1} key={2} />
              <ResumeCard index={2} key={3} />
            </div>
          </TransitionContainer>
          <TransitionContainer variant="RIGHT">
            <div className="flex w-full flex-col items-center justify-center p-8">
              <div className="w-full border-b-2 border-card-foreground pb-5 text-2xl font-bold tracking-wider dark:border-[#a3a5a7]">
                <h3 className="mx-auto w-max">Experience</h3>
              </div>
              <ResumeCard index={0} key={4} />
              <ResumeCard index={1} key={5} />
              <ResumeCard index={2} key={6} />
            </div>
          </TransitionContainer>
        </div>
        <span className=" hero-pill mx-auto my-2 flex w-max items-center justify-center  space-x-2 rounded-3xl border-2 border-card-foreground bg-transparent px-6 py-3 text-sm font-bold uppercase shadow-pill transition-shadow duration-200 ease-in-out hover:shadow-none">
          <Link href="#">Download CV</Link>
        </span>
      </div>

    </section>
  );
}
