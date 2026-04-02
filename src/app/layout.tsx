import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "33 Crickets | Strategic Identity",
  description: "Architecting the Future of Revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} light`}>
      <body className="bg-surface font-body text-on-surface selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
