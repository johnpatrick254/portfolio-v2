"use client";
import { useState } from "react";
import { Caveat } from "next/font/google";
import TransitionContainer from "../transitioncontainer";

const caveat = Caveat({ subsets: ["latin"] });

const clients = [
  { name: "New York Times", logoPath: "/images/logo/New_York_Times.png" },
  { name: "Bechtle", logoPath: "/images/logo/Bechtle.svg" },
  { name: "Jola USA", logoPath: "/images/logo/jola.svg" },
  { name: "Scandiweb", logoPath: "/images/logo/Scandiweb.png" },
  { name: "Two in the Loop", logoPath: "/images/logo/two-inthe-loop.svg" },
  { name: "Decko.app", domain: "decko.app" },
];

function ClientLogo({
  name,
  logoPath,
  domain,
}: {
  name: string;
  logoPath?: string;
  domain?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (logoPath) {
    return (
      <img
        src={logoPath}
        alt={name}
        className="h-14 w-full max-w-[150px] object-contain"
      />
    );
  }


  return (
    <span className="text-center text-sm font-bold leading-tight tracking-wide">
      {name}
    </span>
  );
}

const doubled = [...clients, ...clients];

export default function ClientsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isPaused = hoveredIndex !== null;

  return (
    <section className="flex flex-col items-center justify-center gap-y-8 overflow-hidden border-none bg-gradient-bottom pt-10 2xl:pt-16">
      <div className="text-center uppercase tracking-wider">
        <h2 className="my-2 text-2xl font-bold">previous clients</h2>
        <TransitionContainer variant="LEFT">
          <div className="flex items-center justify-center space-x-3 align-middle">
            <p className="text-mainGreen">Top companies </p>
            <span
              className={`${caveat.className} relative bottom-1.5 text-center text-3xl font-extrabold lowercase tracking-normal`}
            >
              I worked with
            </span>
          </div>
        </TransitionContainer>
      </div>

      <TransitionContainer variant="RIGHT" className="w-full">
        <div className="relative w-full xl:w-[90%] xl:mx-auto overflow-hidden">

          <div
            className="flex w-max gap-10 px-8 pb-4"
            style={{
              animation: "infinite-scroll 28s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex h-28 w-52 items-center justify-center rounded-xl bg-gradient-bottom">
                  <ClientLogo name={client.name} logoPath={client.logoPath} domain={client.domain} />
                </div>

                {/* tooltip */}
                {hoveredIndex === i && (
                  <div className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-md">
                    {client.name}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-x-transparent border-b-transparent border-t-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </TransitionContainer>
    </section>
  );
}
