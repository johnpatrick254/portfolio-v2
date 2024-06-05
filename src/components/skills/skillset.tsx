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

      <TransitionContainer
        variant={'TOP'}
      >
        <div className="flex flex-col items-center justify-center gap-x-12 gap-y-12 md:ml-24 md:flex-row md:flex-wrap md:justify-normal">
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
