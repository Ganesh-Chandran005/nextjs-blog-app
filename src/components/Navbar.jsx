import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-900 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white tracking-tight hover:opacity-90">
          <Terminal className="h-5 w-5 text-violet-500" />
          <span>Dev<span className="text-violet-500">Talkz</span></span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Articles</Link>
        </div>
      </div>
    </nav>
  );
}