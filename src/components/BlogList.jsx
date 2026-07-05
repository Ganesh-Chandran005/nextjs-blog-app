"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "@/utils/api";
import BlogCard from "@/components/BlogCard";
import SearchBar from "@/components/SearchBar";

export default function BlogList({ initialPosts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
    initialData: initialPosts,
  });

  const filteredPosts = posts?.filter((post) =>
    post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-900">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Technical Publications</h2>
          <p className="text-slate-400 text-xs mt-0.5">Indexed architectural production summaries from the field.</p>
        </div>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-sm">No engineering articles match your lookup signature.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}