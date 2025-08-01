import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Alson Lee",
  description: "Alson Lee's Portfolio. I'm always building something new.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="Alson Lee" />
      <meta property="og:description" content="Alson Lee's Portfolio. I'm always building something new." />
      <meta property="og:url" content="https://alson-portfolio.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_SG" />
      <meta property="og:site_name" content="Alson Lee" />
      <meta property="og:image:width" content="1024" />
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
