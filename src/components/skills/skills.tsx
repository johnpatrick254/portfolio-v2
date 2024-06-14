import React from "react";
import SkillSet from "./skillset";
import { skillSets } from "@/lib/constants";
import TransitionContainer from "../transitioncontainer";

export default function Skills() {
  return (
    <section id="skills" className=" bg-gradient-center pb-12 pt-[80px]">
      <div className="mx-auto flex h-max w-full max-w-7xl flex-col space-y-8">
        <div className="text-center uppercase tracking-wider">
          <h2 className="my-2 text-2xl font-bold">Professional Skills</h2>
        </div>
        {skillSets.map((skillSet) => (
          <SkillSet
            key={skillSet.name}
            name={skillSet.name}
            data={skillSet.data}
          />
        ))}
      </div>
    </section>
  );
}
