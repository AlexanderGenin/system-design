import React from "react";
import { montserrat } from "../ui/fonts";

export const Logo = () => {
  return (
    <div className={`${montserrat.className} font-light`}>
      alex
      <span className="inline-block bg-violet rounded-full w-3 h-3 mx-3 align-middle" />
      genin
    </div>
  );
};
