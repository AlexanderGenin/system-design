import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, Social, Background } from "@components";
import { montserrat, plusJakartaSans } from "@ui/fonts";

const components = [
  {
    title: "Computing Server",
    icon: "/images/icons/aws/EC2.svg",
  },
  {
    title: "Relational Database",
    icon: "/images/icons/aws/RDS.svg",
  },
  {
    title: "Document Database",
    icon: "/images/icons/aws/DocumentDB.svg",
  },
  {
    title: "Object Storage",
    icon: "/images/icons/aws/S3.svg",
  },
  {
    title: "Message Queue",
    icon: "/images/icons/aws/SQS.svg",
  },
  {
    title: "Load Balancer",
    icon: "/images/icons/aws/ELB.svg",
  },
];

const systems = [
  {
    title: "Music Streaming",
    slug: "music-streaming",
    icon: "/images/icons/iconsax/music.svg",
    disabled: true,
  },
  {
    title: "Hotel Booking",
    slug: "hotel-booking",
    icon: "/images/icons/iconsax/building-4.svg",
    disabled: true,
  },
  {
    title: "Cloud Storage",
    slug: "cloud-storage",
    icon: "/images/icons/iconsax/folder-cloud.svg",
    disabled: true,
  },
  {
    title: "Photos Sharing",
    slug: "photos-sharing",
    icon: "/images/icons/iconsax/camera.svg",
    disabled: true,
  },
  {
    title: "Video Streaming",
    slug: "video-streaming",
    icon: "/images/icons/iconsax/video-play.svg",
    disabled: true,
  },
  {
    title: "Online Chat",
    slug: "online-chat",
    icon: "/images/icons/iconsax/messages.svg",
    disabled: true,
  },
];

const Main = () => {
  return (
    <div>
      <Background>
        <div className="content-container flex flex-col min-h-screen">
          <header className="flex justify-center align-middle">
            <div className="flex flex-col align-middle justify-center">
              <h1
                className={`${plusJakartaSans.className} font-extrabold uppercase lg:text-6xl text-5xl mt-16 mb-6 text-center lg:text-left leading-[50px]`}
              >
                <Image
                  alt="Construction sign"
                  src="/images/emojis/construction-sign.png"
                  width={50}
                  height={50}
                  className="sm:inline-block mx-auto mb-4 sm:m-auto align-top sm:mr-4 lg:w-[60px] lg:h-[60px]"
                />
                System design
              </h1>
              <div
                className={`${montserrat.className} text-2xl self-end flex hover:text-violet transition-all duration-150 w-full justify-center sm:justify-end`}
              >
                <Link href="/" className={`${montserrat.className} flex gap-4`}>
                  <p>by</p>
                  <Logo />
                </Link>
              </div>
            </div>
          </header>
          <main className="grow flex flex-col gap-10 my-14">
            <div>
              <h2 className={`${plusJakartaSans.className} font-bold text-3xl`}>
                Components
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-10">
                {components.map(({ title, icon }) => {
                  return (
                    <Link
                      key={title}
                      href="#"
                      className="button-disabled p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center"
                    >
                      <Image src={icon} alt={title} width={28} height={28} />
                      <p className="inline-block leading-[44px] w-[184px] text-center">
                        {title}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <div className="text-gray-dark text-xl mt-4 text-center">
                Coming soon...
              </div>
            </div>
            <div>
              <h2 className={`${plusJakartaSans.className} font-bold text-3xl`}>
                Systems
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-10">
                {systems.map(({ title, slug, icon, disabled }) => {
                  return (
                    <Link
                      key={title}
                      href={disabled ? "#" : slug}
                      className={`button${
                        disabled ? "-disabled" : ""
                      } p-2 pl-3 flex items-center justify-start w-[240px] h-[60px] text-lg text-center`}
                    >
                      <Image src={icon} alt={title} width={28} height={28} />
                      <p className="inline-block leading-[44px] w-[184px] text-center">
                        {title}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <div className="text-gray-dark text-xl mt-4 text-center">
                Coming soon...
              </div>
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

export default Main;
