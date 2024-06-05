import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import pt2 from "../../../public/images/pat-2.png";
import Image from "next/image";

export type ServiceCardProp = {
  title: string;
  category: string;
  desc: string;
};
export default function ServiceCard({
  title,
  category,
  desc,
}: ServiceCardProp) {
  return (
    <div className=" relative my-1 flex h-96 w-[90%] max-w-[374px] flex-col justify-start gap-y-12 overflow-hidden rounded-3xl bg-card px-9 py-8 shadow-md  ">
      <h3 className="text-sm font-bold uppercase tracking-wider ">
        {category}
      </h3>
      <div className="z-10 space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{desc}</p>
      </div>
      <Link href="#contact" className="mt-auto font-semibold">
        <p className="flex items-center gap-x-4 align-middle">
          Get Quote{" "}
          <span>
            {" "}
            <ArrowRightIcon color="hsl(153 27% 52%)" />{" "}
          </span>
        </p>
      </Link>
      <Image
        alt="deco"
        src={pt2}
        height={50}
        width={50}
        className="absolute bottom-[-2rem] right-[-1.5rem] h-36 w-36 "
      />
    </div>
  );
}
