"use client";
import { blogLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import RightSection from "./RightSection";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { DrawerPortal } from "../ui/drawer-portal";

const BlogSection = () => {
  const isTablet = useMediaQuery({ maxWidth: 767 });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <div id="blogSection" className="px-4 md:px-8 lg:px-16">
      <div className="mb-4">
        <div className="w-full flex justify-center mb-8">
          <h1 className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] uppercase">
            Blogs
          </h1>
        </div>
        {isTablet && (
          <div>
            <p className="text-lg text-primary font-semibold">
              Search for Blog
            </p>
            <div className="flex items-center justify-between">
              <div className="relative w-[80%]">
                <input
                  type="text"
                  className="border border-foreground/30 rounded-md w-full p-2 mt-1 text-foreground/50 focus:outline-none"
                  placeholder="Search for Blog"
                />
                <Icon
                  icon="iconoir:search"
                  className="size-5 absolute top-1/2 -translate-y-1/2 right-2 text-foreground/50"
                />
              </div>
              <button onClick={() => setIsDrawerOpen(true)} className="p-2">
                <Icon icon="mage:filter" className="size-6" />
              </button>
            </div>
          </div>
        )}
        <div className="flex gap-4 relative mt-4">
          {/* left section */}
          <div className="w-full lg:w-[70%] h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogLists.map((blog) => (
              <Link
                href={blog.slug ? `/blog/${blog.slug}` : "#"}
                key={blog.id}
                className="border border-foreground/30 p-4 rounded-lg flex flex-col justify-between gap-2 group hover:border-primary/30 transition-all duration-300"
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
          {/* right section - desktop */}
          {!isTablet && <RightSection setIsDrawerOpen={setIsDrawerOpen} />}
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isTablet && isDrawerOpen && (
          <DrawerPortal>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-999"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="
          fixed top-0 right-0 z-50
          h-[100dvh] overflow-auto! w-[85%] max-w-md
          bg-background shadow-2xl
          
        "
            >
              {/* Content */}
              <div className="p-6 pt-16">
                <RightSection setIsDrawerOpen={setIsDrawerOpen} />
              </div>
            </motion.div>
          </DrawerPortal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogSection;
