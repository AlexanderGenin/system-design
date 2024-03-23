import React from "react";
import { LinkedInIcon } from "@/app/ui/icons/LinkedInIcon";
import { TelegramIcon } from "@/app/ui/icons/TelegramIcon";
import { TwitterIcon } from "@/app/ui/icons/TwitterIcon";
import { YouTubeIcon } from "@/app/ui/icons/YouTubeIcon";
import Link from "next/link";

const Social = () => {
  return (
    <footer className="mt-16">
      <div className="flex flex-col gap-8 justify-end items-center my-10 md:flex-row">
        <p className="font-thin text-xl">Subscribe</p>
        <div className="h-[1px] w-[100px] bg-gray-light hidden md:block" />
        <div className="flex gap-8">
          {/* Icons attribution: https://iconscout.com/contributors/kolo-design */}
          <Link target="_blank" href="https://linkedin.com/in/alex-genin">
            <LinkedInIcon />
          </Link>
          <Link target="_blank" href="https://x.com/alexander_genin">
            <TwitterIcon />
          </Link>
          <Link target="_blank" href="https://t.co/alex-genin">
            <TelegramIcon />
          </Link>
          <Link target="_blank" href="https://youtube.com">
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

export default Social;
