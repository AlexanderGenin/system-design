import React from "react";
import { plusJakartaSans } from "@ui/fonts";

interface HeadingProps {
  children: React.ReactNode;
  size: 1 | 2 | 3;
}

export const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  const headingClassName = `${plusJakartaSans.className} font-bold`;
  let headingElement: JSX.Element;

  switch (size) {
    case 1:
      headingElement = (
        <h1 className={`${headingClassName} text-5xl my-16`}>{children}</h1>
      );
      break;
    case 2:
      headingElement = (
        <h2 className={`${headingClassName} text-3xl my-8`}>{children}</h2>
      );
      break;
    default:
      headingElement = (
        <h3 className={`${headingClassName} text-xl my-8`}>{children}</h3>
      );
      break;
  }

  return <div className="content-container">{headingElement}</div>;
};
