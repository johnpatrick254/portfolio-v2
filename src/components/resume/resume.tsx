import { Caveat } from 'next/font/google';
import React from 'react'
import ResumeCard from './resumecard';
import Link from 'next/link';
const caveat = Caveat({ subsets: ["latin"] });
export default function Resume() {
  return (
    <section id='resume' className='w-full h-max bg-gradient-bottom pt-1 pb-12'>
      <div className='uppercase text-center tracking-wider'>
        <h2 className='font-bold text-2xl my-2'>Resume</h2>
        <div className='flex space-x-3 items-center justify-center align-middle'>
          <p className='text-mainGreen '>my</p>
          <span
            className={`${caveat.className} font-caveat relative bottom-1.5 text-3xl text-center font-extrabold lowercase tracking-normal `}
          >
            Story
          </span>
        </div>
      </div>
      <div className='flex w-full flex-col justify-center items-center p-8'>
        <div className=' pb-5 text-2xl w-full tracking-wider font-bold border-b-2 border-card-foreground dark:border-[#a3a5a7]'>
          <h3 className='mx-auto w-max'>Education</h3>
        </div>
        <ResumeCard index={0} />
        <ResumeCard index={1} />
        <ResumeCard index={2} />
      </div>
      <div className='flex w-full flex-col justify-center items-center p-8'>
        <div className='pb-5 text-2xl w-full tracking-wider font-bold border-b-2 border-card-foreground dark:border-[#a3a5a7]'>
          <h3 className='mx-auto w-max'>Experience</h3>
        </div>
        <ResumeCard index={0} />
        <ResumeCard index={1} />
        <ResumeCard index={2} />
      </div>
      <span className=" uppercase w-max mx-auto border-card-foreground text-sm transition-shadow duration-200  ease-in-out hero-pill my-2 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-transparent px-6 py-3 font-bold shadow-pill hover:shadow-none">
        <Link
          href="#"
        >
          Download CV
        </Link>
      </span>
    </section>
  )
}
