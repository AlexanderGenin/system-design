import Link from "next/link";
import React from "react";
import { Background, Logo } from "@components";
import { plusJakartaSans } from "@ui/fonts";

export default function NotFound() {
  return (
    <div>
      <Background>
        <div className="flex flex-col min-h-screen">
          <header className="content-container py-10 text-3xl relative z-10">
            <Link href={"/"}>
              <Logo />
            </Link>
          </header>
          <div
            className={`${plusJakartaSans.className} grow text-5xl text-center font-extrabold flex justify-center items-center`}
          >
            <div className="-translate-y-[58px]">Not found... 🤔</div>
          </div>
        </div>
      </Background>
    </div>
  );
}
