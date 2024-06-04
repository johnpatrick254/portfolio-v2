import { Caveat } from 'next/font/google';
import React from 'react'
import { ServiceCarousel } from './servicecarousel';
import { Carousel } from '../ui/carousel';
const caveat = Caveat({ subsets: ["latin"] });

export default function Services() {
    return (
        <section
        id='services'
            className='bg-gradient-bottom flex flex-col h-max w-full border-none gap-y-10 pb-4'
        >
            <div className='uppercase text-center tracking-wider'>
                <h2 className='font-bold text-2xl my-2'>what i do</h2>
                <div className='flex space-x-3 items-center justify-center align-middle'>
                    <p className='text-mainGreen '>my</p>
                    <span
                        className={`${caveat.className} font-caveat relative bottom-1.5 text-3xl text-center font-extrabold lowercase tracking-normal `}
                    >
                        Services
                    </span>
                </div>
            </div>
            <Carousel className=''>
                <ServiceCarousel />
            </Carousel>
        </section>
    )
}
