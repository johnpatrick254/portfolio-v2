"use client"
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import { Caveat } from 'next/font/google'
import React, { useState } from 'react'

const caveat = Caveat({ subsets: ["latin"] });
export type ResumeCardProps = {
    institute?: string;
    title?: string;
    years?: string;
    desc?: string;
    index: number
}

export default function ResumeCard({ index }: ResumeCardProps) {
    const [show, setShow] = useState(index === 0 ? true : false)
    return (
        <div className={`pt-7 relative h-20  ${show ? "h-[250px]":""} pb-5 text-2xl transition-all duration-200 ease-in-out w-full tracking-wider  border-b-2 ${index !== 0 ? "border-r-2" : ""} border-card-foreground dark:border-[#a3a5a7]`}>
            <p className='cursor-pointer font-bold text-lg tracking-wider' onClick={() => setShow(!show)}>Self-Driven Learning</p>
            {
                show
                &&
                <div className='w-full flex flex-col space-y-3 pt-6 '>
                    <div>
                        <p className={`font-bold text-xl py-1 ${caveat.className}`}>Fullstack Development</p>
                        <p className='font-bold text-sm tracking-widest'>2020 . {index === 0 && <span className='uppercase text-mainGreen'>Present</span>}</p>
                    </div>
                    <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptatibus quas nobis, harum cumque omnis.</p>
                </div>
            }
            <div className='absolute bottom-[-1.3rem] z-10 backdrop-blur-3xl right-[-1.3rem] h-10 w-10 cursor-pointer' onClick={() => setShow(!show)}>
                {
                    show
                        ?
                        <MinusCircleIcon className='w-full h-full' />
                        :
                        <PlusCircleIcon className='w-full h-full' />
                }
            </div>
        </div>
    )
}
