import Image from "next/image";
import React from "react";
export type SkillCardProps = {
  src: string;
  name: string;
  desc: string;
};
export default function SkillCard({ desc, name, src }: SkillCardProps) {
  return (
    <div className="flex  h-max w-full flex-col border-b-2 border-b-card-foreground bg-transparent px-5  pb-4 dark:border-b-mainGreen md:h-[240px] md:w-60 ">
      <div className="mb-3 flex items-center justify-between text-xl font-bold uppercase tracking-wider">
        <h5>{name}</h5>
        <Image src={src} height={30} width={30} alt="typescript" className="" />
      </div>
      <p>{desc}</p>
    </div>
  );
}
