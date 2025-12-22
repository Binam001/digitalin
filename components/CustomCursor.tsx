"use client";

import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    const target = e.target as HTMLElement;
    const computedStyle = window.getComputedStyle(target);
    const cursorStyle = computedStyle.cursor;

    // Check for pointer elements
    const isClickable =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      cursorStyle === "pointer" ||
      target.getAttribute("role") === "button";

    // Check for grab elements
    const isGrab =
      cursorStyle === "grab" ||
      cursorStyle === "grabbing" ||
      target.getAttribute("data-cursor") === "grab";

    setIsPointer(isClickable && !isGrab);
    setIsGrabbing(isGrab);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hide default cursor globally
    document.body.style.cursor = "none";

    // Add global style to hide cursor on all elements
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
      const existingStyle = document.getElementById("custom-cursor-style");
      if (existingStyle) existingStyle.remove();
    };
  }, [
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
  ]);

  // Determine cursor state
  const getCursorState = () => {
    if (isMouseDown && isGrabbing) return "grabbing";
    if (isGrabbing) return "grab";
    if (isMouseDown) return "mousedown";
    if (isPointer) return "pointer";
    return "default";
  };

  const cursorState = getCursorState();

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Outer ring */}
        <div
          className={`absolute rounded-full border-2 border-white transition-all duration-200 ease-out ${
            cursorState === "pointer"
              ? "w-12 h-12 -translate-x-6 -translate-y-6 opacity-100"
              : cursorState === "mousedown"
              ? "w-8 h-8 -translate-x-4 -translate-y-4 opacity-100 bg-white/20"
              : cursorState === "grab"
              ? "w-10 h-10 -translate-x-5 -translate-y-5 opacity-100 border-dashed"
              : cursorState === "grabbing"
              ? "w-8 h-8 -translate-x-4 -translate-y-4 opacity-100 bg-white/30 border-dashed"
              : "w-10 h-10 -translate-x-5 -translate-y-5 opacity-50"
          }`}
        />

        {/* Inner dot */}
        <div
          className={`absolute rounded-full bg-white transition-all duration-150 ease-out ${
            cursorState === "pointer"
              ? "w-2 h-2 -translate-x-1 -translate-y-1"
              : cursorState === "mousedown"
              ? "w-3 h-3 -translate-x-1.5 -translate-y-1.5 bg-primary"
              : cursorState === "grab" || cursorState === "grabbing"
              ? "w-0 h-0"
              : "w-2 h-2 -translate-x-1 -translate-y-1"
          }`}
        />

        {/* Grab icon */}
        {(cursorState === "grab" || cursorState === "grabbing") && (
          <div
            className={`absolute -translate-x-3 -translate-y-3 transition-transform duration-150 ${
              cursorState === "grabbing" ? "scale-90" : "scale-100"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {cursorState === "grabbing" ? (
                // Grabbing hand
                <>
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </>
              ) : (
                // Open hand
                <>
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </>
              )}
            </svg>
          </div>
        )}

        {/* Pointer arrow indicator */}
        {cursorState === "pointer" && (
          <div className="absolute w-0 h-0 -translate-x-0.5 translate-y-2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white rotate-[135deg]" />
        )}
      </div>

      {/* Trailing cursor for smooth effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 0.3 : 0,
          transition: "transform 0.15s ease-out, opacity 0.2s ease",
        }}
      >
        <div
          className={`absolute rounded-full bg-primary transition-all duration-300 ease-out ${
            cursorState === "pointer"
              ? "w-16 h-16 -translate-x-8 -translate-y-8"
              : cursorState === "mousedown"
              ? "w-12 h-12 -translate-x-6 -translate-y-6"
              : "w-8 h-8 -translate-x-4 -translate-y-4"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
