import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import github from "../../public/images/github-142-svgrepo-com.svg";
import linkedIn from "../../public/images/linkedin-round-svgrepo-com.svg";
import twitter from "../../public/images/twitter-svgrepo-com.svg";
export default function Footer() {
  return (
    <footer className="py-12 gap-y-5 border-t-2 border-[#d8d3cc] dark:border-[#2d333c]  w-full flex flex-col items-center justify-center">
      <div className="flex relative  h-max w-full items-center justify-center gap-3">
        <Link target="_blank" href={"https://github.com/johnpatrick254"} title="Github">
          <Image alt="github" src={github} height={30} width={30} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/john-patrick-254ke/"}
          target="_blank"
          title="LinkedIn"
        >
          <Image alt="linkedin" src={linkedIn} height={30} width={30} />
        </Link>
        <Link
          target="_blank" href={"https://x.com/jpattrick538"} title="twitter">
          <Image alt="twitter" src={twitter} height={30} width={30} />
        </Link>
      </div>
      <p className='font-semibold tracking-widest uppercase text-xs'>© {new Date().getFullYear()} John <span className='text-mainGreen'>Onyango</span> </p>
    </footer>
  )
}
