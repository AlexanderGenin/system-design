import React from "react";
import Image from "next/image";

export interface IllustrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Illustration: React.FC<IllustrationProps> = (props) => {
  return (
    <div className="content-container my-10 overflow-scroll">
      <Image
        priority
        src={props.src}
        height={props.height}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};
