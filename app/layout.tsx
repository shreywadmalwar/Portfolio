import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';
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
      <head>
      </head>
      <body className={`font-mono ${inter.className}`}>
        <Navbar />
        {children}
        <ContactFooter />
      </body>
    </html >
  );
}