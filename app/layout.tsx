import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-powered personalised recipe app",
  description: "AI-powered personalised recipe app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden flex flex-col justify-between  min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
