import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { blogLists, serviceLists, trendLists } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/providers/LenisProvider";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import TransitionProvider from "@/context/TransitionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalIn",
  description: "",
  icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <LenisProvider>
          {/* <TransitionProvider>
            <PageTransition> */}
          <CustomCursor />
          <Navbar
            blogCount={blogLists.length}
            trendCount={trendLists.length}
            serviceCount={serviceLists.length}
          />
          <main className="page-content">{children}</main>

          <Footer />
          {/* </PageTransition>
          </TransitionProvider> */}
        </LenisProvider>
      </body>
    </html>
  );
}
