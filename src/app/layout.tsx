import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { roboto } from "@/styles/fonts";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create ASDFASDNext App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="mt-6 mx-16">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
