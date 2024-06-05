import { LucideProps } from "lucide-react";
import { Caveat } from "next/font/google";
import React from "react";
const caveat = Caveat({ subsets: ["latin"] });
export type ContactCardProps = {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
export default function ContactCard({
  title,
  description,
  Icon,
}: ContactCardProps) {
  return (
    <div className="flex w-max items-center justify-start gap-x-3">
      <span className="relative mr-[3rem] flex h-14 w-14 rounded-full border-2 border-foreground bg-card p-2 shadow-pill">
        <Icon className="h-full w-full  " />
        <span className="absolute right-[-2.5rem] top-6 mx-auto flex h-[2px]  w-10 bg-foreground"></span>
      </span>
      <div className="flex flex-col justify-start gap-y-2">
        <span
          className={`${caveat.className} font-caveat relative bottom-0.5 text-2xl   font-extrabold tracking-normal `}
        >
          {title}
        </span>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
