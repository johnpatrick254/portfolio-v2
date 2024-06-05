import React from "react";

export default function Divider() {
  return (
    <div className="my-4 h-max w-full xl:hidden">
      <span className="mx-auto flex h-10 w-[2px] bg-foreground"></span>
    </div>
  );
}
