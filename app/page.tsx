import React from "react";
import Link from "next/link";
import Image from "next/image";
import Social from "@components/Social";
import Logo from "@components/Logo";
import Background from "@ui/Background";
import { plusJakartaSans } from "@ui/fonts";

const Home = () => {
  return (
    <>
      <Background height="full" />
      <div className="flex flex-col font-thin min-h-screen">
        <header className="my-10 text-3xl">
          <Logo />
        </header>
        <main className="grow flex flex-col-reverse gap-8 md:justify-between items-center md:flex-row">
          <div>
            <p className="text-4xl">
              Hi{" "}
              <Image
                alt="Hand wave"
                src="/emojis/hand-wave.png"
                width={40}
                height={40}
                className="inline-block align-top"
              />
              , I’m
            </p>
            <h1
              className={`${plusJakartaSans.className} font-extrabold text-5xl mt-8 mb-10 `}
            >
              Alexander Genin
            </h1>
            <ul className="text-xl my-10 list-outside">
              <li className="flex items-center before:content-['•'] before:text-violet before:mr-4 before:text-4xl">
                Senior Software Engineer
              </li>
              <li className="flex items-center before:content-['•'] before:text-violet before:mr-4 before:text-4xl">
                System Design Enthusiast
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <Link
                className="button border-violet border-2 text-xl w-[200px] text-center leading-[50px]"
                href="/blog"
              >
                Let&apos;s design!
              </Link>
            </div>
          </div>
          <div className="md:h-[310px] md:w-[310px] h-[270px] w-[270px] rounded-full bg-gradient-to-br from-[#AA95FF] to-violet flex justify-center items-center shadow-[0_0_15px_0_#623bff70]">
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
    </>
  );
};

export default Home;
