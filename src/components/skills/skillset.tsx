import React from "react";
import SkillCard, { SkillCardProps } from "./skillcard";
import { Caveat } from "next/font/google";
import TransitionContainer from "../transitioncontainer";
const caveat = Caveat({ subsets: ["latin"] });
export type SkillSetProps = {
  name: string;
  data: SkillCardProps[];
};
export default function SkillSet({ name, data }: SkillSetProps) {
  return (
    <div className="flex w-full flex-col gap-y-12 px-2 py-5 ">
      <div className="mx-auto flex items-center justify-center gap-x-3 align-middle">
        <p className="text-mainGreen ">My </p>
        <span
          className={`${caveat.className} font-caveat relative bottom-1  text-center text-3xl font-extrabold lowercase tracking-normal `}
        >
          {name}
        </span>
      </div>

      <TransitionContainer variant={"TOP"}>
        <div className="grid grid-flow-row grid-cols-2 gap-y-12 gap-x-20 justify-center items-center w-max mx-auto sm:grid-cols-3 md:grid-cols-4 md:px-12 xl:flex xl:flex-wrap xl:w-full xl:max-w-[990px] ">
          {data.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              desc={skill.desc}
              src={skill.src}
            />
          ))}
        </div>
      </TransitionContainer>
    </div>
  );
}
