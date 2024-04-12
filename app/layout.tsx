import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexander Genin | System Design",
  description:
    "I help you master System Design with comprehensive articles and high-quality illustrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-light font-light antialised">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
