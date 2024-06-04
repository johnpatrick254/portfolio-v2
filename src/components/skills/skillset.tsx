import React from 'react'
import SkillCard, { SkillCardProps } from './skillcard';
import { Caveat } from 'next/font/google';
const caveat = Caveat({ subsets: ["latin"] });
export type SkillSetProps = {
    name: string;
    data: SkillCardProps[]
}
export default function SkillSet({ name, data }: SkillSetProps) {
    return (
        <div className='w-full px-8 py-5 flex flex-col space-y-12'>
            <div className='flex space-x-3 items-center justify-center align-middle'>
                <p className='text-mainGreen '>My </p>
                <span
                    className={`${caveat.className} font-caveat relative bottom-1  text-3xl text-center font-extrabold lowercase tracking-normal `}
                >
                    {name}
                </span>
            </div>
            {
                data.map(skill => <SkillCard key={skill.name} name={skill.name} desc={skill.desc} src={skill.src} />)
            }
        </div>
    )
}
