"use client";

import { blogLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div id="blogSection" className="px-4 md:px-8 lg:px-16">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogLists.map((blog) => (
            <Link
              href={blog.slug ? `/blog/${blog.slug}` : "#"}
              key={blog.id}
              className={`group h-fit cursor-pointer relative rounded-lg border border-zinc-300/20 p-4 space-y-4`}
            >
              <div className="relative w-full h-[60%]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 duration-300 transition-colors rounded-md" />
              </div>
              <div className="text-lg text-primary font-semibold">
                {blog.title}
              </div>
              <div className="line-clamp-4 text-sm">{blog.desc}</div>

              <hr className="h-px text-zinc-300/20" />

              <div className="">
                <button className="flex items-center gap-2 group-hover:text-primary">
                  <span className="text-sm">Read More</span>
                  <Icon icon="solar:arrow-right-outline" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
