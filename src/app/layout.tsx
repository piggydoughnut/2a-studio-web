import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { roboto } from "@/styles/fonts";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2a design studio",
  description:
    "Architectural services for residential, commercial & educational projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="scroll-smooth transition-all delay-100 pt-0 sm:pt-6  flex flex-col h-screen justify-between">
        <div className="mx-4 sm:mx-16">
          <Header />
          <div className="mt-10 sm:mt-28">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
