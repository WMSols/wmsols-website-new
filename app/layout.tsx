import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Gelasio } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  metadataBase: new URL("https://wmsols.com"),
  title: "WMsols | Custom Software Development & Digital Solutions Agency",
  description:
    "WMsols builds world-class web apps, mobile apps, AI automation, and digital strategies for ambitious businesses. 100+ projects. 98% client satisfaction. Let's build together.",
  keywords: [
    "custom software development agency",
    "web and mobile app development",
    "AI automation services",
    "digital transformation company"
  ],
  openGraph: {
    title: "WMsols | Custom Software Development & Digital Solutions Agency",
    description:
      "WMsols builds world-class web apps, mobile apps, AI automation, and digital strategies for ambitious businesses.",
    url: "https://wmsols.com",
    siteName: "WMsols",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "WMsols - Digital Experiences that Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WMsols | Custom Software Development & Digital Solutions Agency",
    description:
      "WMsols builds world-class web apps, mobile apps, AI automation, and digital strategies for ambitious businesses.",
    images: ["/og-image.webp"],
  },
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
        {/* Injects GA4 perfectly without blocking the main thread */}
        <GoogleAnalytics gaId="G-RL23CCQGEE" />
      </body>
    </html>
  );
}