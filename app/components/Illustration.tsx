import React from "react";
import Image from "next/image";

export interface IllustrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  allowShrink?: boolean;
}

export const Illustration: React.FC<IllustrationProps> = (props) => {
  return (
    <div className="container hide-scrollbar overflow-scroll mx-auto my-10 px-4 max-w-fit ">
      <Image
        priority
        src={props.src}
        height={props.height}
        width={props.width}
        alt={props.alt}
        className={`${props.allowShrink ? "" : "min-w-max"} md:min-w-[auto]`}
      />
    </div>
  );
};
