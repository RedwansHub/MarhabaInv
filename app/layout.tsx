import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Sub/Header";
import Footer from "./components/Sub/Footer";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
          {children}
      </body>
    </html>
  );
}
