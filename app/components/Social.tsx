import React from "react";
import { LinkedInIcon } from "@ui/icons/LinkedInIcon";
import { TelegramIcon } from "@ui/icons/TelegramIcon";
import { TwitterIcon } from "@ui/icons/TwitterIcon";
import { YouTubeIcon } from "@ui/icons/YouTubeIcon";
import Link from "next/link";

export const Social = () => {
  return (
    <footer className="mt-16">
      <div className="flex flex-col gap-8 justify-end items-center my-10 md:flex-row">
        <p className="font-thin text-xl">Connect</p>
        <div className="h-[1px] w-[100px] bg-gray-light hidden md:block" />
        <div className="flex gap-8">
          {/* Icons attribution: https://iconscout.com/contributors/kolo-design */}
          <Link target="_blank" href="https://linkedin.com/in/alex-genin">
            <LinkedInIcon />
          </Link>
          <Link target="_blank" href="https://x.com/alexander_genin">
            <TwitterIcon />
          </Link>
          <Link target="_blank" href="https://t.me/alexgenin">
            <TelegramIcon />
          </Link>
          <Link target="_blank" href="https://youtube.com/@AlexanderGenin">
            <YouTubeIcon />
          </Link>
        </div>
      </div>
      <p className="text-lg md:text-right text-gray-dark my-6 text-center">
        © 2024 Alexander Genin
      </p>
    </footer>
  );
};
