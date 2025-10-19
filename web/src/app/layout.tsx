import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paws & Applause Talent Show",
  description:
    "Experience an animated showcase celebrating the most talented dogs on the planet. Register your pup and explore the full event lineup.",
  openGraph: {
    title: "Paws & Applause Talent Show",
    description:
      "Celebrate soaring vocals, stunt superstars, and heartwarming heroes at the ultimate dog talent showcase.",
    url: "https://agentic-2c555bda.vercel.app",
    siteName: "Paws & Applause Talent Show",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paws & Applause Talent Show",
    description:
      "Animated landing page for the most paw-some talent showcase of the year.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
