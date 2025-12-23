"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LightRays from "../LightRays";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isTablet = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const menuToggler = document.querySelector(
      ".menu-toggler"
    ) as HTMLElement | null;
    const menuOverlay = document.querySelector(
      ".menu-overlay"
    ) as HTMLElement | null;

    if (!menuToggler || !menuOverlay) return;

    const menuTogglerText = menuToggler.querySelector(
      "p"
    ) as HTMLElement | null;

    if (!menuTogglerText) return;
    let isMenuOpen = false;
    let isAnimating = false;

    menuToggler.addEventListener("click", () => {
      if (isAnimating) return;

      isMenuOpen = !isMenuOpen;
      isAnimating = true;

      if (isMenuOpen) {
        gsap.to(menuOverlay, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onStart: () => {
            menuOverlay.style.pointerEvents = "all";
          },
          onComplete: () => {
            isAnimating = false;
          },
        });
        menuTogglerText.textContent = "Close";
      } else {
        gsap.to(menuOverlay, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          onStart: () => {
            menuOverlay.style.pointerEvents = "none";
          },
          onComplete: () => {
            isAnimating = false;
          },
        });
        menuTogglerText.textContent = "Menu";
      }
    });

    const menuItems = document.querySelectorAll(".menu-text");

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          backgroundSize: "100% 100%",
          duration: 1,
          ease: "power3.out",
          overwrite: true,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          backgroundSize: "0% 100%",
          duration: 0.5,
          ease: "power3.out",
          overwrite: true,
        });
      });
    });

    const menuLinks = document.querySelectorAll(".menu-item");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isAnimating) return;
        isMenuOpen = false;
        isAnimating = true;
        gsap.to(menuOverlay, {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          onStart: () => {
            if (menuOverlay) {
              menuOverlay.style.pointerEvents = "none";
            }
          },
          onComplete: () => {
            isAnimating = false;
          },
        });
        if (menuTogglerText) {
          menuTogglerText.textContent = "Menu";
        }
      });
    });
  });
  return (
    <>
      <nav
        id="navbarSection"
        className="fixed top-0 z-100 w-screen flex items-center justify-between"
      >
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={24} />
          </Link>
        </div>

        <div className="menu-toggler">
          <p className="cursor-pointer">Menu</p>
        </div>
      </nav>

      <div className="menu-overlay fixed top-0 left-0 w-full h-screen flex items-end pointer-events-none opacity-0 will-change-[opacity] z-90 bg-background">
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
              className="custom-rays w-screen absolute top-0 left-1/2 trasform -translate-x-1/2"
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
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="menu-item uppercase text-4xl lg:text-6xl"
            >
              <span className="menu-text">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .menu-text {
          line-height: 1;
          background: linear-gradient(#f26622, #f26622) left no-repeat,
            #ffffff90;
          background-size: 0% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};

export default Navbar;
