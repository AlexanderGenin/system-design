import React from "react";
import { plusJakartaSans } from "@ui/fonts";

interface HeadingProps {
  children: React.ReactNode;
  size: 1 | 2 | 3 | 4;
}

export const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  const headingClassName = `${plusJakartaSans.className} font-bold`;
  let headingElement: JSX.Element;

  switch (size) {
    case 1:
      headingElement = (
        <h1
          className={`content-container ${headingClassName} text-5xl leading-tight mt-12`}
        >
          {children}
        </h1>
      );
      break;
    case 2:
      headingElement = (
        <h2
          className={`content-container ${headingClassName} text-3xl mt-12 mb-6`}
        >
          {children}
        </h2>
      );
      break;
    case 3:
      headingElement = (
        <h3
          className={`content-container ${headingClassName} text-xl mt-10 mb-6`}
        >
          {children}
        </h3>
      );
      break;
    default:
      headingElement = (
        <h4
          className={`content-container ${headingClassName} text-lg mt-8 mb-6`}
        >
          {children}
        </h4>
      );
      break;
  }

  return headingElement;
};
