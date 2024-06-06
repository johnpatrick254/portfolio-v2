"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { SheetClose } from "../ui/sheet";
import { useState } from "react";

export const navLinks: {
  title: string;
  path: string;
}[] = [
  {
    title: "Home",
    path: "/#hero",
  },
  {
    title: "Services",
    path: "/#services",
  },
  {
    title: "Skills",
    path: "/#skills",
  },
  {
    title: "Portfolio",
    path: "/#portfolio",
  },
  {
    title: "Resume",
    path: "/#resume",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

const NavbarMobile = () => {
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <nav>
      <ul className="flex flex-col">
        {navLinks.map((link, i) => (
          <li key={i}>
            <SheetClose asChild>
              <Link
                href={link.path}
                className={cn(buttonVariants({ variant: "link" }), {
                  "text-tertiary": currentHash === link.path,
                })}
              >
                {link.title}
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavbarDesktop = () => {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : "",
  );

  return (
    <nav>
      <ul className="flex flex-row">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.path}
              onClick={() => {
                setCurrentHash(link.path);
              }}
              className={cn(
                buttonVariants({ variant: "link", className: "px-3" }),
                {
                  "text-tertiary": currentHash === link.path,
                },
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavbarMobile, NavbarDesktop };
