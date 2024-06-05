"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "dark",
  );

  return (
    <Button
      variant="outline"
      size="icon"
      className="border border-foreground bg-transparent "
    >
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => {
            setTheme("light");
            setCurrentTheme("light");
          }}
          className="h-full w-full rotate-0 p-2 transition-all dark:-rotate-90 "
        />
      ) : (
        <MoonIcon
          onClick={() => {
            setTheme("dark");
            setCurrentTheme("dark");
          }}
          className=" h-full w-full rotate-0 p-2 transition-all dark:rotate-90 "
        />
      )}
    </Button>
  );
}
