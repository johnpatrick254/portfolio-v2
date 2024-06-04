import { Caveat } from "next/font/google";
import React from "react";
import pt1 from "../../../public/images/pat-1.png";
import pt2 from "../../../public/images/pat-2.png";
import Image from "next/image";
import github from "../../../public/images/github-142-svgrepo-com.svg";
import linkedIn from "../../../public/images/linkedin-round-svgrepo-com.svg";
import twitter from "../../../public/images/twitter-svgrepo-com.svg";
import Link from "next/link";
import Divider from "../divider";

const caveat = Caveat({ subsets: ["latin"] });
function Hero() {
  return (
    <section id="hero" className="flex border-none min-h-screen w-full flex-col items-center justify-start bg-gradient-top pt-[100px] pb-8 align-middle">
      <div className="space-y-2.5 pb-3 text-center text-[13px] font-bold uppercase tracking-wider">
        <p className="text-textcolor">
          Hello, <span className="text-mainGreen">my name is</span>{" "}
        </p>
        <h1 className="title text-[40px]">
          <span className="text-mainGreen">John</span> Onyango
        </h1>
        <p>I am a</p>
        <span
          className={`${caveat.className} font-caveat text-3xl font-extrabold lowercase tracking-normal `}
        >
          Fullstack Developer
        </span>
      </div>
      <div className=" relative flex  h-[26rem] w-[26rem] flex-col items-center justify-center uppercase ">
        <span className="z-10 flex h-3/4 w-3/4 rounded-full bg-mainGreen">
          {" "}
        </span>
        <span className="absolute right-14 top-10 z-0 h-[113px] w-[113px]">
          <Image src={pt1} alt="deco" fill={true} />
        </span>
        <span className="absolute bottom-16 left-1 z-0 h-[71px] w-[71px]">
          <Image src={pt2} alt="deco" fill={true} />
        </span>
        <span className="absolute bottom-10 right-8 z-0 h-[71px] w-[71px]">
          <Image src={pt2} alt="deco" fill={true} />
        </span>
        <span className=" hero-pill border-card-foreground absolute bottom-28 left-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-background px-4 py-1 font-bold shadow-pill">
          <span className="w-1/2  space-x-2 text-xl leading-5">
            <span>2</span>
            <span className="text-mainGreen ">+</span>
          </span>
          <span className="flex flex-col text-[10px] ">
            <span>years of</span>
            <span className="text-mainGreen">experience</span>
          </span>
        </span>
        <span className=" hero-pill border-card-foreground absolute bottom-20 right-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-background px-4 py-1 font-bold shadow-pill">
          <span className="w-1/2 space-x-2 text-xl leading-5">
            <span>11</span>
          </span>
          <span className="flex flex-col text-[10px] ">
            <span>Fullstack</span>
            <span className="text-mainGreen">Applications</span>
          </span>
        </span>
      </div>
      <p className="px-2 text-center">
        Based in Nairobi, Kenya. I specialize in creating robust and efficient
        web applications tailored to meet clients' needs. I'd love to discuss
        your project with you.
      </p>
      <div className="flex h-max w-full items-center justify-center gap-3 py-6 ">
        <Link target="_blank" href={"https://github.com/johnpatrick254"} title="Github">
          <Image alt="github" src={github} height={40} width={40} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/john-patrick-254ke/"}
          target="_blank"
          title="LinkedIn"
        >
          <Image alt="linkedin" src={linkedIn} height={40} width={40} />
        </Link>
        <Link
          target="_blank" href={"https://x.com/jpattrick538"} title="twitter">
          <Image alt="twitter" src={twitter} height={40} width={40} />
        </Link>
      </div>
      <span className=" uppercase  border-card-foreground text-sm transition-shadow duration-200  ease-in-out hero-pill my-2 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-transparent px-6 py-3 font-bold shadow-pill hover:shadow-none">
        <Link
          href="#"
        >
          Download CV
        </Link>
      </span>
      <Divider />

    </section>
  );
}

export default Hero;
