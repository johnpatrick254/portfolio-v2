"use client";
import * as React from "react";
import {
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/constants";

export function ServiceCarousel() {
  const { api } = useCarousel();
  const [activeIndex, setActiveIndex] = React.useState(0);

  api?.on("scroll", (e) => {
    const target = e.slidesInView();
    setActiveIndex(target[0]);
    e.off("scroll", () => null);
  });

  return (
    <>
      <CarouselContent>
        {services.map((skill, index) => (
          <CarouselItem
            key={index}
            className="flex w-full items-center justify-center"
          >
            <ServiceCard
              key={index}
              category={skill.category}
              desc={skill.desc}
              title={skill.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative mx-[45%] mt-10 flex h-12 w-32 items-center justify-start space-x-3 text-center align-middle">
        <span
          onClick={() => {
            setActiveIndex(0);
            api?.scrollTo(0);
          }}
          className={`ease-[cubic-bezier(0.3, 0, 0.3, 1)] z-10 flex cursor-pointer border border-foreground transition-all  duration-300 ${activeIndex === 0 ? `h-3 w-3 ` : `h-2 w-2`} rounded-full bg-mainGreen `}
          role="button"
          aria-label="Go to slide 1"
        ></span>
        <span
          onClick={() => {
            setActiveIndex(1);
            api?.scrollTo(1);
          }}
          className={`ease-[cubic-bezier(0.3, 0, 0.3, 1)] z-10 flex cursor-pointer border border-foreground transition-all  duration-300 ${activeIndex === 1 ? `h-3 w-3 ` : `h-2 w-2`} rounded-full bg-mainGreen `}
          role="button"
          aria-label="Go to slide 2"
        ></span>
        <span
          onClick={() => {
            setActiveIndex(2);
            api?.scrollTo(2);
          }}
          className={`ease-[cubic-bezier(0.3, 0, 0.3, 1)] z-10 flex cursor-pointer border border-foreground transition-all duration-300 ${activeIndex === 2 ? `h-3 w-3 ` : `h-2 w-2`} rounded-full bg-mainGreen `}
          role="button"
          aria-label="Go to slide 3"
        ></span>
        <span className="tra absolute left-[-4px] h-0.5 w-[29%] bg-foreground"></span>
      </div>
    </>
  );
}
