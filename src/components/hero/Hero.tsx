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
import jp from "../../../public/images/jpo.png"

const caveat = Caveat({ subsets: ["latin"] });
function Hero() {
  return (
    <section
      id="hero"
      className=" bg-gradient-top pt-[80px] xl:pt-[55px] 2xl:pt-[0] "
    >
      {
        // desktop
        <div className="hidden xl:flex mx-auto min-h-screen flex-col items-center justify-start border-none align-middle xl:flex-row xl:flex-wrap xl:justify-between xl:px-8 max-w-7xl">
          <div className="space-y-2.5 pb-3 text-center text-[13px] font-bold uppercase tracking-wider md:text-[15px] xl:text-left xl:max-w-[46%] xl:space-y-5">

            <p className="text-textcolor xl:text-base">
              Hello, <span className="text-mainGreen">my name is</span>{" "}
            </p>
            <h1 className="title text-[40px] md:text-[50px] lg:text-[40px] xl:text-[60px] ">
              <span className="text-mainGreen">John</span> Onyango
            </h1>
            <div className="xl:flex xl:gap-x-3 xl:items-center xl:text-base">
              <p>I am a</p>
              <span
                className={`${caveat.className} font-caveat text-4xl font-bold lowercase tracking-normal  `}
              >
                Fullstack Developer
              </span>
            </div>
            <div >
              <p className="px-2 text-center font-normal tracking-normal normal-case xl:text-left xl:px-0">
                Based in Nairobi, Kenya. I specialize in creating robust and efficient
                web applications tailored to meet clients' needs. I'd love to discuss
                your project with you.
              </p>
              <div className="flex flex-col w-max my-2 gap-x-3">
                <div className="flex h-max w-full items-center justify-center gap-3 py-6 xl:items-start xl:justify-start ">
                  <Link
                    target="_blank"
                    href={"https://github.com/johnpatrick254"}
                    title="Github"
                  >
                    <Image alt="github" quality={100} src={github} height={35} width={35} />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/john-patrick-254ke/"}
                    target="_blank"
                    title="LinkedIn"
                  >
                    <Image alt="linkedin" quality={100} src={linkedIn} height={35} width={35} />
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://x.com/jpattrick538"}
                    title="twitter"
                  >
                    <Image alt="twitter" quality={100} src={twitter} height={35} width={35} />
                  </Link>
                </div>
                <span className="my-2 flex items-center justify-center rounded-3xl border-2 border-card-foreground bg-transparent px-6 py-3 text-sm font-bold  uppercase shadow-pill transition-shadow duration-200 ease-in-out hover:shadow-none  xl:mx-0">
                  <Link className="text-nowrap" href="#">Download CV</Link>
                </span>
                <Divider />
              </div>
            </div>
          </div>
          <div className=" relative flex  h-[23rem] w-[23rem] flex-col items-center justify-center uppercase md:h-[34rem] md:w-[34rem] lg:h-[25rem] lg:w-[25rem] xl:h-[40rem] xl:w-[40rem]">
            <span className="z-10 flex h-3/4 w-3/4 rounded-full bg-mainGreen">
              <div className=" relative bottom-16 left-8  h-[90%] w-[90%]">
                <Image quality={100} src={jp} alt="deco" className="w-auto h-auto" />
              </div>
            </span>

            <span className="absolute right-14 top-10 z-0 h-[113px] w-[113px] md:h-[180px] md:w-[180px] lg:h-[150px] lg:w-[150px] xl:top-16 xl:right-20">
              <Image quality={100} src={pt1} alt="deco" fill={true} />
            </span>
            <span className="absolute bottom-16 left-1 z-0 h-[71px] w-[71px] md:h-[150px] md:w-[150px] lg:h-[120px] lg:w-[120px] xl:bottom-20 xl:left-10">
              <Image quality={100} src={pt2} alt="deco" fill={true} />
            </span>
            <span className="absolute bottom-10 right-8 z-0 h-[71px] w-[71px] md:h-[150px] md:w-[150px] lg:h-[120px] lg:w-[120px] xl:right-20 xl:bottom-12">
              <Image quality={100} src={pt2} alt="deco" fill={true} />
            </span>
            <span className=" hover:shadow-none transition-all ease-in-out delay-75 absolute bottom-28 left-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 border-card-foreground bg-background px-4 py-1 font-bold shadow-pill md:bottom-40 md:left-6 md:space-x-4 md:rounded-[65px] md:px-4  md:py-2 lg:bottom-32 lg:left-0 lg:space-x-3 lg:py-1 xl:space-x-6 xl:bottom-44 ">
              <span className="w-1/2  space-x-2 text-xl leading-5 md:text-4xl lg:text-2xl xl:text-4xl">
                <span>2</span>
                <span className="text-mainGreen ">+</span>
              </span>
              <span className="flex flex-col text-[10px] md:text-base lg:text-[12px] xl:text-lg">
                <span>years of</span>
                <span className="text-mainGreen">experience</span>
              </span>
            </span>
            <span className=" hover:shadow-none transition-all ease-in-out delay-75 absolute bottom-20 right-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 border-card-foreground bg-background px-4 py-1 font-bold shadow-pill md:bottom-32 md:space-x-4 md:rounded-[65px] md:px-4 md:py-2 lg:bottom-20 lg:right-2 lg:space-x-3 lg:py-1 xl:space-x-6 xl:bottom-36 xl:right-6">
              <span className="w-1/2 space-x-2 text-xl leading-5 md:text-4xl  lg:text-2xl xl:text-4xl">
                <span>7</span>
                <span className="text-mainGreen ">+</span>
              </span>
              <span className="xl:text-lg]  flex flex-col text-[10px] md:text-base lg:text-[12px] xl:text-lg">
                <span>Fullstack</span>
                <span className="text-mainGreen">Applications</span>
              </span>
            </span>
          </div>

        </div>
      }

      {
        //mobile
        <div className=" xl:hidden flex mx-auto min-h-screen flex-col items-center justify-start border-none align-middle xl:flex-row xl:flex-wrap xl:justify-between xl:px-8 max-w-7xl">
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
              <div className="relative bottom-12 left-4  h-[85%] w-[90%]">
                <Image quality={100} src={jp} alt="deco"  className="w-full h-full" />
              </div>
            </span>
            <span className="absolute right-14 top-10 z-0 h-[113px] w-[113px]">
              <Image quality={100} src={pt1} alt="deco" fill={true} />
            </span>
            <span className="absolute bottom-16 left-1 z-0 h-[71px] w-[71px]">
              <Image quality={100} src={pt2} alt="deco" fill={true} />
            </span>
            <span className="absolute bottom-10 right-8 z-0 h-[71px] w-[71px]">
              <Image quality={100} src={pt2} alt="deco" fill={true} />
            </span>
            <span className=" hero-pill hover:shadow-none cursor-pointer border-card-foreground absolute bottom-28 left-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-background px-4 py-1 font-bold shadow-pill">
              <span className="w-1/2  space-x-2 text-xl leading-5">
                <span>2</span>
                <span className="text-mainGreen ">+</span>
              </span>
              <span className="flex flex-col text-[10px] ">
                <span>years of</span>
                <span className="text-mainGreen">experience</span>
              </span>
            </span>
            <span className=" hero-pill hover:shadow-none cursor-pointer border-card-foreground absolute bottom-20 right-8 z-20 flex items-center justify-center space-x-2 rounded-3xl border-2 bg-background px-4 py-1 font-bold shadow-pill">
              <span className="w-1/2 space-x-2 text-xl leading-5">
                <span>7</span>
                <span className="text-mainGreen ">+</span>
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
              <Image quality={100} alt="github" src={github} height={40} width={40} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/john-patrick-254ke/"}
              target="_blank"
              title="LinkedIn"
            >
              <Image quality={100} alt="linkedin" src={linkedIn} height={40} width={40} />
            </Link>
            <Link
              target="_blank" href={"https://x.com/jpattrick538"} title="twitter">
              <Image quality={100} alt="twitter" src={twitter} height={40} width={40} />
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
        </div>
      }



    </section>
  );
}

export default Hero;
