import { blogLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const Blog = () => {
  return (
    <section className="w-screen min-h-screen flex relative py-8">
      {/* <div className="">
        <h1 className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] uppercase mb-8 text-center">
          Blogs
        </h1>
      </div> */}
      <div className="w-[40%] space-y-8 sticky top-24 h-fit">
        <p className="text-[150px] uppercase leading-[0.8]">
          Bl
          <br />
          ogs
        </p>
        <p>Read about advertising world.</p>
        <Link href="/blog" className="">
          <InteractiveHoverButton text="View More" className="" />
        </Link>
      </div>
      <div className="w-[60%] space-y-12">
        {blogLists.map((blog) => (
          <Link
            href={blog.slug ? `/blog/${blog.slug}` : "#"}
            key={blog.id}
            // className="border border-foreground/30 p-4 rounded-lg flex flex-col justify-between gap-2 group hover:border-primary/30 transition-all duration-300 z-10"
            className="flex h-75 gap-2"
          >
            <div className="w-[30%] h-full rounded-md border overflow-hidden">
              <img
                src={blog.src}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-around">
              <div className="">
                <p className="text-sm">Dec, 2025</p>
                <p className="text-xl">{blog.title}</p>
              </div>

              <InteractiveHoverButton
                text="Read More"
                className="text-xs w-fit"
              />
              <p className="text-sm line-clamp-4 text-foreground/70">
                {blog.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
