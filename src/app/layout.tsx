import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import "./globals.css";

import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import SmoothFollower from "@/components/SmoothFollower";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashim Portfolio",
  description: "Personal portfolio of Hashim - Full Stack Developer",
  keywords: [
    "Hashim Pinjari",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Hashim portfolio",
  ],
  authors: [{ name: "Hashim Pinjari" }],
  robots: "index, follow",
  openGraph: {
    title: "Hashim Portfolio",
    description: "Personal portfolio of Hashim - Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.4,
          }}
        >
          <SmoothFollower />
          <main>{children}</main>
          <ScrollProgressIndicator />
        </ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}
