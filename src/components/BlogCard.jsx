import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="group relative flex flex-col bg-slate-900/30 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-0.5">
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500 opacity-75 group-hover:opacity-95"
        />
        <span className="absolute top-4 left-4 bg-violet-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="text-[11px] text-violet-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
          <span>{post.category}</span>
          <span className="text-slate-700">•</span>
          <span className="text-slate-400 font-normal normal-case">{post.readingTime}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-400 transition-colors line-clamp-2 leading-snug mb-2.5">
          {post.title}
        </h3>
        
        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {post.tags?.map((tag, i) => (
            <span key={i} className="text-[11px] bg-slate-900/80 text-slate-400 px-2.5 py-0.5 rounded border border-slate-800/80">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={post.authorAvatar} 
              alt={post.authorName} 
              className="h-9 w-9 rounded-full object-cover border border-slate-700/80 bg-slate-800"
            />
            <div>
              <h4 className="text-xs font-semibold text-slate-200">{post.authorName}</h4>
              <p className="text-[10px] text-slate-500">{post.authorRole}</p>
            </div>
          </div>
          
          <Link href={`/posts/${post.id}`} className="p-2 bg-slate-900 border border-slate-800 text-slate-400 rounded-xl group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all">
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}