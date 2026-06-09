import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Gelasio } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WMsols | Custom Software Development & Digital Solutions Agency",

description:
  "WMsols builds world-class web apps, mobile apps, AI automation, and digital strategies for ambitious businesses. 100+ projects. 98% client satisfaction. Let's build together.",

keywords: [
  "custom software development agency",
  "web and mobile app development",
  "AI automation services",
  "digital transformation company"
],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${gelasio.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
