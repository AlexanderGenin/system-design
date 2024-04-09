import React from "react";
import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export const Anchor: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href} className="text-violet">
      {children}
    </Link>
  );
};
