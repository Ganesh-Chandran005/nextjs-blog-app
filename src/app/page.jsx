import React from "react";
import { fetchAllPosts } from "@/utils/api";
import BlogList from "@/components/BlogList";

export default async function HomePage() {
  let initialPosts = [];
  try {
    initialPosts = await fetchAllPosts();
  } catch (error) {
    console.error(error.message);
  }

  return (
    <div className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[11px] font-bold text-violet-400 uppercase tracking-wide">
          Production Systems Feed
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
          Stay Curious. Discover the Future of Coding.
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          An architectural log tracking distributed microservices engineering models, interface structural performance layouts, and secure cloud pipelines.
        </p>
      </header>
      <BlogList initialPosts={initialPosts} />
    </div>
  );
}