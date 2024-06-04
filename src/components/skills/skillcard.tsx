import Image from 'next/image'
import React from 'react'
export type SkillCardProps = {
    src: string;
    name: string;
    desc: string
}
export default function SkillCard({ desc, name, src }: SkillCardProps) {
    return (
        <div className='w-full  border-b-2 h-max dark:border-b-mainGreen border-b-card-foreground bg-transparent flex flex-col justify-between px-5 pb-4'>
            <div className='flex uppercase font-bold text-xl tracking-wider justify-between items-center mb-3'>
                <h5>{name}</h5>
                <Image
                    src={src}
                    height={30}
                    width={30}
                    alt='typescript'
                    className=''
                />
            </div>
            <p >
                {desc}
            </p>
        </div>
    )
}
