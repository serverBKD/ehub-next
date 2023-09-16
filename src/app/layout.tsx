import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eCommerce xHUB",
  description: "Commerce website xHUB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
