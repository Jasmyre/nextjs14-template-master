

import React from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from "../components/FollowCursur";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(String (process.env.BASE_URL)),
  keywords: [
  ],
  title: {
    default: "GovPH",
    template: "%s | GovPH",
  },
  description:
    "GovPH",
  openGraph: {
	title: "Title",
	url: new URL(String (process.env.BASE_URL)),
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail image for " + process.env.BASE_URL,
      },
    ],
    description:
      "GovPH",
  },
  other: {
    "google-site-verification": "Z_jFqVnsRqmwaQwrIPd9ey7fdRY4tunPiojllRX0yI0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FollowCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
