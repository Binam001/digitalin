"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="navbarSection"
        className={`fixed z-50 w-screen transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={24} />
            </Link>
          </div>

          {/* nav links */}
          {/* <div className="flex items-center relative"> */}
          {/* <div className="absolute top-0 left-0 py-2">
              <button onClick={() => setIsOpen(true)}>Menu</button>
            </div> */}

          <div className="">
            <div className="flex items-center gap-6">
              {navLinks.map((navItem) => (
                // <li
                //   key={navItem.id}
                //   className={`p-2 cursor-pointer hover:text-primary ${
                //     pathname === navItem.href
                //       ? "text-white hover:text-primary bg-primary"
                //       : ""
                //   }`}
                // >
                //   <Link href={navItem.href}>{navItem.title}</Link>
                // </li>
                <Link
                  key={navItem.id}
                  href={navItem.href}
                  className="group relative py-2 font-body text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {navItem.title}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                      pathname === navItem.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
