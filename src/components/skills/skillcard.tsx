import Image from "next/image";
import React from "react";
export type SkillCardProps = {
  src: string;
  name: string;
  desc: string;
};
export default function SkillCard({ desc, name, src }: SkillCardProps) {
  return (
    <div className="flex gap-4 h-28 w-20 flex-col justify-center items-center text-center bg-transparent  font-bold uppercase tracking-wider">
        <Image
          quality={100}
          src={src}
          height={100}
          width={100}
          alt="typescript"
          className="h-16 w-16"
          />
          <h5>{name}</h5>
    </div>
  );
}
     
