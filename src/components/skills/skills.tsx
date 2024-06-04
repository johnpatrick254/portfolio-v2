import React from 'react'
import SkillSet from './skillset'
import { skillSets } from '@/lib/constants'

export default function Skills() {
    return (
        <section id='skills' className='h-max flex flex-col space-y-8 pb-12 w-full bg-gradient-center'>
            <div className='uppercase text-center tracking-wider'>
                <h2 className='font-bold text-2xl my-2'>Professional Skills</h2>
            </div>
            {
                skillSets.map(skillSet => <SkillSet key={skillSet.name} name={skillSet.name} data={skillSet.data} />)
            }
        </section>
    )
}
