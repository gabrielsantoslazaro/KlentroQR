"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      return true;
    }
    return false;
  });
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, already visible
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getTransformClasses = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-7 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-7 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-7";
      case "right":
        return "opacity-0 -translate-x-7";
      default:
        return "opacity-0 scale-[0.98]";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "650ms",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all duration-700 will-change-transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
