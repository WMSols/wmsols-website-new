import type { Metadata } from "next";
import { Inter, Gelasio } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnalyticsWrapper from '@/components/common/AnalyticsWrapper';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationGraph } from "@/lib/structured-data";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wmsols.com"),
  title: {
    default: "WMsols | Custom Software Development & Digital Solutions Agency",
    template: "%s | WMsols",
  },
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
    url: "https://www.wmsols.com",
    siteName: "WMsols",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WMsols | Custom Software Development & Digital Solutions Agency",
    description:
      "WMsols builds world-class web apps, mobile apps, AI automation, and digital strategies for ambitious businesses.",
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
      className={`${inter.variable} ${gelasio.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationGraph()} />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        {/* Injects GA4 perfectly without blocking the main thread */}
        <AnalyticsWrapper gaId="G-RL23CCQGEE" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
