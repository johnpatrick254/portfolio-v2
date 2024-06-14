import { Caveat } from "next/font/google";
import React from "react";
import { ServiceCarousel } from "./servicecarousel";
import { Carousel } from "../ui/carousel";
import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";
import TransitionContainer from "../transitioncontainer";
const caveat = Caveat({ subsets: ["latin"] });

export default function Services() {
  return (
    <section
      id="services"
      className="flex h-max flex-col items-center justify-center gap-y-10 overflow-hidden border-none bg-gradient-bottom pb-12 pt-[80px] 2xl:pt-[130px]"
    >
      <div className="text-center uppercase tracking-wider">
        <h2 className="my-2 text-2xl font-bold">what i do</h2>
        <TransitionContainer variant="LEFT">
        <div className="flex items-center justify-center space-x-3 align-middle">
          <p className="text-mainGreen ">my</p>
          <span
            className={`${caveat.className} font-caveat relative bottom-1.5 text-center text-3xl font-extrabold lowercase tracking-normal `}
          >
            Services
          </span>
        </div>
        </TransitionContainer>
      </div>
      <TransitionContainer variant="TOP">
        <Carousel className="w-[400px] lg:hidden">
          <ServiceCarousel />
        </Carousel>
        <div className="hidden gap-3 px-2 lg:flex lg:flex-row">
          {services.map((skill, index) => (
            <ServiceCard
              key={index}
              category={skill.category}
              desc={skill.desc}
              title={skill.title}
            />
          ))}
        </div>
      </TransitionContainer>
    </section>
  );
}
