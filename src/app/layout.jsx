import React from "react";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DevTalkz",
  description: "A developer corner dedicated to web systems and engineering insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Providers>
          <Navbar />
          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}