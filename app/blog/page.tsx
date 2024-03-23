import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@components/Logo";
import Social from "@components/Social";
import Background from "@ui/Background";
import { montserrat, plusJakartaSans } from "@ui/fonts";

const Blog = () => {
  return (
    <>
      <Background height="header" />
      <div className="flex flex-col min-h-screen">
        <header className="flex justify-center align-middle">
          <div className="flex flex-col align-middle justify-center">
            <h1
              className={`${plusJakartaSans.className} font-extrabold uppercase lg:text-6xl text-5xl mt-20 mb-6 text-center lg:text-left leading-[50px]`}
            >
              <Image
                alt="Construction sign"
                src="/emojis/construction-sign.png"
                width={50}
                height={50}
                className="sm:inline-block mx-auto mb-4 sm:m-auto align-top sm:mr-4 lg:w-[60px] lg:h-[60px]"
              />
              System design
            </h1>
            <Link
              href={"/"}
              className={`${montserrat.className} self-end text-2xl flex gap-4 hover:text-violet transition-all duration-150 w-full justify-center sm:justify-end`}
            >
              <p>by</p>
              <Logo />
            </Link>
          </div>
        </header>
        <main className="grow">
          <h2
            className={`${plusJakartaSans.className} font-bold text-3xl mt-20`}
          >
            Components
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-10">
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/EC2.svg"
                alt="Computing Server"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Computing Server
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/RDS.svg"
                alt="Relational Database"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Relational Database
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/DocumentDB.svg"
                alt="Document Database"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Document Database
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/S3.svg"
                alt="Object Storage"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Object Storage
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/SQS.svg"
                alt="Message Queue"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Message Queue
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/aws/ELB.svg"
                alt="Load Balancer"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Load Balancer
              </p>
            </Link>
          </div>
          <h2
            className={`${plusJakartaSans.className} font-bold text-3xl mt-20`}
          >
            Systems
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-10">
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/music.svg"
                alt="Music Streaming"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Music Streaming
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/building-4.svg"
                alt="Hotel Booking"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Hotel Booking
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/folder-cloud.svg"
                alt="Cloud Storage"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Cloud Storage
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/camera.svg"
                alt="Photos Sharing"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Photos Sharing
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/video-play.svg"
                alt="Video Streaming"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Video Streaming
              </p>
            </Link>
            <Link
              href="#"
              className="button p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
            >
              <Image
                src="/icons/iconsax/messages.svg"
                alt="Online Chat"
                width={28}
                height={28}
              />
              <p className="inline-block leading-[44px] w-[184px] text-center">
                Online Chat
              </p>
            </Link>
          </div>
        </main>
        <footer>
          <Social />
        </footer>
      </div>
    </>
  );
};

export default Blog;
