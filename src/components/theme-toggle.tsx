"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="border border-foreground bg-transparent "
    >
      {theme === "dark" ? (
        <SunIcon
          onClick={() => {
            setTheme("light");
          }}
          className="h-full w-full rotate-0 p-2 transition-all dark:-rotate-90 "
        />
      ) : (
        <MoonIcon
          onClick={() => {
            setTheme("dark");
          }}
          className=" h-full w-full rotate-0 p-2 transition-all dark:rotate-90 "
        />
      )}
    </Button>
  );
}
