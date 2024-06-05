import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "../../public/images/github-142-svgrepo-com.svg";
import linkedIn from "../../public/images/linkedin-round-svgrepo-com.svg";
import twitter from "../../public/images/twitter-svgrepo-com.svg";
export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center  gap-y-5 border-t-2 border-[#d8d3cc] py-12 dark:border-[#2d333c]">
      <div className="relative flex  h-max w-full items-center justify-center gap-3">
        <Link
          target="_blank"
          href={"https://github.com/johnpatrick254"}
          title="Github"
        >
          <Image alt="github" quality={100} src={github} height={30} width={30} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/john-patrick-254ke/"}
          target="_blank"
          title="LinkedIn"
        >
          <Image alt="linkedin" quality={100} src={linkedIn} height={30} width={30} />
        </Link>
        <Link
          target="_blank"
          href={"https://x.com/jpattrick538"}
          title="twitter"
        >
          <Image alt="twitter" quality={100} src={twitter} height={30} width={30} />
        </Link>
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest">
        © {new Date().getFullYear()} John{" "}
        <span className="text-mainGreen">Onyango</span>{" "}
      </p>
    </footer>
  );
}
