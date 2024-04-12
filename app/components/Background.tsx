import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => {
  return (
    <div className="relative bg-[url('/images/grid.svg')] bg-repeat h-full w-full">
      {children}
      <div className="radial-gradient(at top right, rgba(69,72,255,0.5), transparent) absolute w-[500px] h-[300px] -top-[200px] right-0 lg:-top-[400px] rounded-full lg:w-[800px] lg:h-[600px] bg-gradient-radial from-0% to-65% from-[rgba(69,72,255,0.5)]" />
    </div>
  );
};
