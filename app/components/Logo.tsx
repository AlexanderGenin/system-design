import React from "react";
import { montserrat } from "../ui/fonts";

const Logo = () => {
  return (
    <p className={`${montserrat.className}`}>
      alex
      <span className="inline-block bg-violet rounded-full w-3 h-3 mx-3 align-middle" />
      genin
    </p>
  );
};

export default Logo;
