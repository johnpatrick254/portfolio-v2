import React from "react";
import SkillSet from "./skillset";
import { skillSets } from "@/lib/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" bg-gradient-center pb-12"
    >
      <div className="flex mx-auto h-max w-full flex-col space-y-8 max-w-7xl">
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
