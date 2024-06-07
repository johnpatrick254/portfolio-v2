import React from "react";
import { ServiceCardProp } from "../services/ServiceCard";
import Image, { StaticImageData } from "next/image";
import pt2 from "../../../public/images/pat-2.png";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export type ProjectCardProps = ServiceCardProp & {
  img: StaticImageData;
  category: string;
  link: string;
  code: string;
};
export default function ProjectCard({
  img,
  category,
  desc,
  title,
  link,
  code,
}: ProjectCardProps) {
  return (
    <div className="flex h-[485px]  max-w-[330px] flex-col rounded-3xl bg-card p-4 shadow-md lg:w-[360px] lg:max-w-[360px] ">
      <div className="h-[230px] w-full rounded-xl">
        <Image
          src={img}
          alt={title}
          quality={100}
          className="h-full w-full rounded-xl object-cover object-center-center"
        />
      </div>

      <div className="relative flex h-1/2 w-full flex-col  justify-start overflow-hidden pt-5">
        <div>
          <p className="pb-2 text-[14px] font-bold uppercase tracking-wider text-mainGreen">
            {category}
          </p>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="z-10 py-3 text-sm">
          <p>{desc}</p>
        </div>
        <div className="mt-auto flex flex-col gap-y-3 text-sm">
          <Link
            href={code}
            target="_blank"
            className="mt-auto w-max border-b-2 border-mainGreen font-semibold"
          >
            <p className="flex items-center gap-x-4 align-middle">View code</p>
          </Link>
          <Link href={link} target="_blank" className="mt-auto font-semibold">
            <p className="flex items-center gap-x-2 align-middle">
              Live site{" "}
              <span>
                {" "}
                <ArrowRightIcon color="hsl(153 27% 52%)" className="animate-bounce" />
              </span>
            </p>
          </Link>
        </div>
        <Image
          alt="deco"
          src={pt2}
          quality={100}
          height={50}
          width={50}
          className="absolute bottom-[-1rem] right-[-1rem] h-16 w-16 object-cover"
        />
      </div>
    </div>
  );
}
