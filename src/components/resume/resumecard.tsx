"use client";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
export type ResumeCardProps = {
  institute?: string;
  title?: string;
  start?: number | string;
  end?: number | string | null;
  desc?: string;
  index: number;
};

export default function ResumeCard({
  index,
  institute,
  title,
  start,
  desc,
  end,
}: ResumeCardProps) {
  const [show, setShow] = useState(index === 0 ? true : false);
  return (
    <div
      className={`relative flex flex-col pr-1 h-20 min-h-max my-1 py-2 ${show ? "h-[230px]" : ""} w-full  border-b-2  text-2xl tracking-wider transition-all duration-200  ease-in-out ${index !== 0 ? "border-r-2" : ""} border-card-foreground dark:border-[#a3a5a7]`}
    >
      <p
        className="cursor-pointer text-lg text-left font-bold tracking-wider"
        onClick={() => setShow(!show)}
      >
        {institute}
      </p>
      {show && (
        <div className="flex w-full flex-col space-y-3 py-6 pt-6 ">
          <div>
            <p className={`py-1 text-xl font-bold ${caveat.className}`}>
              {title}
            </p>
            <p className="text-sm font-bold tracking-widest">
              {start} . {end}
              {end === null && (
                <span className="uppercase text-mainGreen">Present</span>
              )}
            </p>
          </div>
          <p className="text-base">{desc}</p>
        </div>
      )}
      <div
        className="absolute  bottom-[-1.3rem] right-[-1.3rem] z-10 h-10 w-10 cursor-pointer rounded-full backdrop-blur-3xl"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <MinusCircleIcon className="h-full w-full" />
        ) : (
          <PlusCircleIcon className="h-full w-full animate-wiggle" />
        )}
      </div>
    </div>
  );
}
