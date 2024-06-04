import React from 'react'
import { ServiceCardProp } from '../services/ServiceCard'
import Image, { StaticImageData } from 'next/image';
import pt2 from "../../../public/images/pat-2.png";
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link';


export type ProjectCardProps = ServiceCardProp & {
    img: StaticImageData;
    category: string;
    link: string;
};
export default function ProjectCard({ img, category, desc, title, link }: ProjectCardProps) {
    return (
        <div className='p-5 h-[500px]  bg-card max-w-[374px] mx-auto flex flex-col rounded-3xl '>
            <div className='h-[230px] w-full rounded-xl'>
                <Image
                    src={img}
                    alt={title}
                    quality={100}
                    className='rounded-xl h-full w-full object-cover object-center-center'
                />
            </div>
            
            <div className='relative overflow-hidden h-max w-full pt-5'>
                <div>
                    <p className='font-bold text-[14px] tracking-wider uppercase text-mainGreen pb-2'>{category}</p>
                    <h3 className='font-bold text-2xl'>{title}</h3>
                </div>
                <div className='z-10 py-3'>
                    <p>{desc}</p>
                </div>
                <div className='flex flex-col gap-y-3  justify-self-end text-sm'>
                    <Link
                        href=""
                        className='mt-auto font-semibold border-b-2 border-mainGreen w-max'
                    >
                        <p className='flex gap-x-4 align-middle items-center'>View code</p>
                    </Link>
                    <Link
                        href=""
                        className='mt-auto font-semibold'
                    >
                        <p className='flex gap-x-2 align-middle items-center'>Live site <span> <ArrowRightIcon color='hsl(153 27% 52%)' /></span></p>
                    </Link>
                </div>
                <Image
                    alt='deco'
                    src={pt2}
                    height={50}
                    width={50}
                    className='absolute right-[-1rem] bottom-[-1rem] w-16 h-16 object-cover'
                />
            </div>
        </div>

    )
}
