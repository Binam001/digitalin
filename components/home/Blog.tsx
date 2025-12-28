import { blogLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const Blog = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-evenly">
      <div className="">
        <h1 className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] uppercase mb-8 text-center">
          Blogs
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        {blogLists.map((blog) => (
          <Link
            href={blog.slug ? `/blog/${blog.slug}` : "#"}
            key={blog.id}
            className="border border-foreground/30 p-4 rounded-lg flex flex-col justify-between gap-2 group hover:border-primary/30 transition-all duration-300 z-10"
          >
            <div className="">
              <p className="group-hover:text-primary transition-colors duration-300">
                {blog.title}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-foreground/50">5m read time</p>
              <img
                src={blog.image}
                alt={blog.title}
                className="lg:h-36 object-cover rounded-md group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between text-foreground/70">
              <div className="flex items-center gap-1">
                <Icon icon="mdi:eye-outline" className="size-5" />
                <span className="text-xs">4M</span>
              </div>
              <Icon icon="mdi:share" className="size-6" />
            </div>
          </Link>
        ))}
      </div>

      <Link href="/blog" className="flex justify-center">
        <InteractiveHoverButton text="View More" />
      </Link>
    </section>
  );
};

export default Blog;
