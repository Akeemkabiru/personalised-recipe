import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`bg-background flex items-center justify-center w-full ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
