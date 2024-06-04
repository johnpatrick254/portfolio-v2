import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import pt2 from "../../../public/images/pat-2.png";
import Image from 'next/image';

export type ServiceCardProp={
    title:string,
    category:string,
    desc:string,

}
export default function ServiceCard({title,category,desc}:ServiceCardProp) {
    return (
        <div className=' relative overflow-hidden py-8 px-9 flex flex-col justify-start gap-y-12 bg-card rounded-3xl w-[90%] h-96 mx-auto'>
            <h3 className='uppercase font-bold text-sm tracking-wider ' data-swiper-parallax="-100">{category}</h3>
            <div className='space-y-4 z-10'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>{desc}</p>
            </div>
            <Link
            href="#pricing"
            className='mt-auto font-semibold'
            >
                <p className='flex gap-x-4 align-middle items-center'>See Pricing <span> <ArrowRightIcon color='hsl(153 27% 52%)'/> </span></p>
            </Link>
            <Image
            alt='deco'
            src={pt2}
            height={50}
            width={50}
            className='absolute right-[-1.5rem] bottom-[-2rem] w-36 h-36 '
            />
        </div>
    )
}
