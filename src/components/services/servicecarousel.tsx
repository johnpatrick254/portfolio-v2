"use client"
import * as React from "react"
import {
    CarouselContent,
    CarouselItem,
    useCarousel,
} from "@/components/ui/carousel"
import ServiceCard from "./ServiceCard"
import { services } from "@/lib/constants"

export function ServiceCarousel() {
    const { api } = useCarousel()
    const [activeIndex, setActiveIndex] = React.useState(0)

        api?.on('scroll', (e) => {
            const target = e.slidesInView();
            setActiveIndex(target[0]);
            e.off('scroll',()=>null)
        })

    return (
        <>
            <CarouselContent>
                {services.map((skill, index) => (
                    <CarouselItem key={index}  >
                        <div className="p-1">
                            <ServiceCard
                                key={index}
                                category={skill.category}
                                desc={skill.desc}
                                title={skill.title}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="relative mt-10 mx-[45%] flex justify-start items-center align-middle space-x-3 w-32 h-12 text-center">
                <span onClick={() => {
                    setActiveIndex(0);
                    api?.scrollTo(0);
                }}
                    className={`z-10 transition-all duration-300 ease-[cubic-bezier(0.3, 0, 0.3, 1)] cursor-pointer border border-foreground  flex ${activeIndex === 0 ? `w-3 h-3` : `w-2 h-2`} rounded-full bg-mainGreen `} role="button" aria-label="Go to slide 1"></span>
                <span onClick={() => {
                    setActiveIndex(1);
                    api?.scrollTo(1);
                }} className={`z-10 transition-all duration-300 ease-[cubic-bezier(0.3, 0, 0.3, 1)] cursor-pointer border border-foreground  flex ${activeIndex === 1 ? `w-3 h-3` : `w-2 h-2`} rounded-full bg-mainGreen `} role="button" aria-label="Go to slide 2"></span>
                <span onClick={() => {
                    setActiveIndex(2);
                    api?.scrollTo(2);
                }} className={`z-10 transition-all duration-300 ease-[cubic-bezier(0.3, 0, 0.3, 1)] cursor-pointer border border-foreground flex ${activeIndex === 2 ? `w-3 h-3` : `w-2 h-2`} rounded-full bg-mainGreen `} role="button" aria-label="Go to slide 3"></span>
                <span className="w-[29%] h-0.5 bg-foreground absolute left-[-4px] tra" ></span>
            </div>
        </>
    )
}
