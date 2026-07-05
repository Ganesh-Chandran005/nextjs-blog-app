import React from "react";
import Link from "next/link";
import { fetchPostById } from "@/utils/api";
import { ChevronLeft, Clock, FolderOpen } from "lucide-react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const post = await fetchPostById(id);
    return { title: post.title };
  } catch {
    return { title: "DevTalkz Article" };
  }
}

export default async function PostDetailsPage({ params }) {
  const { id } = await params;
  const post = await fetchPostById(id);

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors group uppercase tracking-wider">
        <ChevronLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to archive</span>
      </Link>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-wider">
            <FolderOpen className="h-3 w-3" />
            <span>{post.category}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>{post.readingTime}</span>
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
          {post.title}
        </h1>

        <div className="pt-4 border-t border-slate-900 flex items-center gap-4">
          <img 
            src={post.authorAvatar} 
            alt={post.authorName} 
            className="h-12 w-12 rounded-full object-cover border border-slate-800 bg-slate-900"
          />
          <div>
            <h3 className="text-sm font-bold text-slate-200">{post.authorName}</h3>
            <p className="text-xs text-slate-400 font-medium">{post.authorRole}</p>
          </div>
        </div>
      </header>

      <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-900">
        <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover opacity-80" />
      </div>

      <section className="text-slate-300 leading-relaxed space-y-6 text-base antialiased font-normal">
        {post.body?.split("\\n\\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}