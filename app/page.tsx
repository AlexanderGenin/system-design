import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Social, Logo, Background } from "@components";
import { plusJakartaSans } from "@ui/fonts";

const Home = () => {
  return (
    <div>
      <Background>
        <div className="content-container flex flex-col font-thin min-h-screen">
          <header className="my-10 text-3xl">
            <Link href="#">
              <Logo />
            </Link>
          </header>
          <main className="grow flex flex-col-reverse gap-8 md:justify-between items-center md:flex-row">
            <div>
              <p className="text-4xl">
                Hi{" "}
                <Image
                  alt="Hand wave"
                  src="/images/emojis/hand-wave.png"
                  width={40}
                  height={40}
                  className="inline-block align-top "
                />
                , I’m
              </p>
              <h1
                className={`${plusJakartaSans.className} font-extrabold text-5xl mt-8 mb-10 `}
              >
                Alexander Genin
              </h1>
              <ul className="text-xl my-10 list-inside list-disc marker:text-violet flex flex-col gap-2">
                <li>Senior Software Engineer</li>
                <li>System Design Enthusiast</li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <Link
                  className="button border-violet border-2 text-xl w-[200px] text-center leading-[50px]"
                  href="/main"
                >
                  Let&apos;s design!
                </Link>
              </div>
            </div>
            <div className="md:h-[310px] md:w-[310px] h-[270px] w-[270px] rounded-full bg-gradient-to-br from-[#4769f6] to-violet flex justify-center items-center shadow-[0_0_30px_0_#4548ff80]">
              <Image
                alt="Alexander Genin"
                src="/images/alexander-genin.webp"
                width={1500}
                height={1500}
                className="md:h-[300px] md:w-[300px] h-[260px] w-[260px] rounded-full"
                priority
              />
            </div>
          </main>
          <footer>
            <Social />
          </footer>
        </div>
      </Background>
    </div>
  );
};

export default Home;
