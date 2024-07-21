import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ContactFooter from "./components/contact-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyash Wadmalwar",
  description: "Portfolio Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`font-mono ${inter.className} absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>

        <div>
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
