"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightRays from "../LightRays";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const overlayVariants = {
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "auto" },
  };

  return (
    <>
      <nav className="fixed top-0 z-100 w-screen flex items-center justify-end gap-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={24} />
        </Link>

        <button
          className="menu-toggler w-8 h-8 flex flex-col justify-center items-center gap-1 cursor-pointer z-50 group"
          onClick={toggleMenu}
        >
          <motion.span
            className="block h-0.5 w-8 bg-foreground rounded group-hover:w-10 duration-500 transform group-hover:translate-y-0.5"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-full bg-foreground rounded"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-full bg-foreground rounded group-hover:w-10 duration-500 transform group-hover:-translate-y-0.5"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay fixed top-0 left-0 w-full h-screen flex items-end bg-background z-90"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {!isTablet && (
              <>
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#ffffff"
                  raysSpeed={1.5}
                  lightSpread={0.8}
                  rayLength={1.2}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays w-screen absolute top-0 left-1/2 transform -translate-x-1/2"
                />
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <img
                    src="/images/home/buddha-statue.png"
                    alt=""
                    className="object-contain w-full h-2/3 absolute bottom-0"
                  />
                  <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                </div>
              </>
            )}

            <div className="menu-links grid grid-cols-3 relative w-full h-1/2 items-center justify-center px-4 md:px-8 lg:px-16">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="menu-item uppercase text-4xl lg:text-6xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      style={{
                        background: isActive
                          ? "#f26622"
                          : "linear-gradient(#f26622, #f26622) left no-repeat, #ffffff90",
                        backgroundSize: "0% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      whileHover={{
                        backgroundSize: "100% 100%",
                        fontWeight: 700,
                        transition: { duration: 0.7, ease: "easeOut" as const },
                      }}
                      animate={{
                        backgroundSize: "0% 100%",
                        fontWeight: isActive ? 700 : 400,
                        transition: { duration: 0.5, ease: "easeOut" as const },
                      }}
                    >
                      {link.title}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
