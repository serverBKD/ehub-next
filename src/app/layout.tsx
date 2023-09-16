import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar.jsx";
import { roboto } from "../fonts/fonts.tsx";

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
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
