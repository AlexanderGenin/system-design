import React from "react";

interface Props {
  height: "full" | "header";
}

const Background = ({ height }: Props) => {
  const Grid = () => (
    <div className="relative bg-[url('/images/grid.svg')] bg-repeat h-full w-full" />
  );

  const Glow = () => (
    <div className="absolute right-0 -top-[400px] rounded-full w-[800px] h-[600px] bg-gradient-radial from-0% to-65% from-[rgba(106,69,255,0.5)] -z-5" />
  );

  return (
    <>
      <Glow />
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        {height === "full" ? (
          <div className="h-[100%]">
            <Grid />
          </div>
        ) : (
          <div className="h-[240px]">
            <Grid />
          </div>
        )}
      </div>
    </>
  );
};

export default Background;
