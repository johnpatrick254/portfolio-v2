import { LucideProps } from 'lucide-react';
import { Caveat } from 'next/font/google';
import React from 'react'
const caveat = Caveat({ subsets: ["latin"] });
export type ContactCardProps={
    title:string;
    description:string;
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}
export default function ContactCard({title,description,Icon}:ContactCardProps) {
    return (
        <div className='flex w-max items-center justify-start gap-x-8'>
            <span className='flex h-14 w-14 p-2 mr-[3rem] bg-card rounded-full border-2 border-foreground relative shadow-pill'>
                <Icon className="w-full h-full  "/>
                <span className='flex absolute h-[2px] w-10 top-6 right-[-2.5rem]  bg-foreground mx-auto'></span>
            </span>
            <div className='flex flex-col gap-y-2 justify-start'>
                <span
                    className={`${caveat.className} font-caveat relative bottom-0.5 text-2xl   font-extrabold tracking-normal `}
                >
                    {title}
                </span>
                <p className=''>{description}</p>
            </div>
        </div>
    )
}
