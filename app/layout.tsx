import { quicksand } from "@ui/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Genin | System Design",
  description: "Let's learn System Design together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative px-6 bg-black text-gray-light ${quicksand.className} antialised`}
      >
        <div className="container mx-auto lg:max-w-screen-md ">{children}</div>
      </body>
    </html>
  );
}
