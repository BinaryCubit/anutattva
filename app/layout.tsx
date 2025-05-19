import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";



export const metadata: Metadata = {
  title: "Anutattva Foundation - Empowering Minds",
  description: "Anutattva Foundation is dedicated to transforming education through innovative, industry-relevant training in technology, data, and emerging fields. We empower individuals with skills that matter in the real world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${font.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
