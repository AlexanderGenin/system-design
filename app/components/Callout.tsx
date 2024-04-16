import Image from "next/image";
import React from "react";

export interface CalloutProps {
  children: React.ReactNode;
  type: "idea" | "example";
}

export const Callout: React.FC<CalloutProps> = ({ type, children }) => {
  const icon =
    type === "idea"
      ? "/images/icons/iconsax/lamp-on.svg"
      : "/images/icons/iconsax/glass.svg";

  return (
    <div className="mx-4">
      <div className="content-container border-solid border-[1px] border-violet rounded-xl px-4 py-6 my-6 flex items-center gap-4 text-lg bg-violet-transparent">
        <Image src={icon} alt={type} width={32} height={32} />
        <div className="callout overflow-scroll hide-scrollbar flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  );
};
