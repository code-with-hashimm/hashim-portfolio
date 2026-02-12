"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ArrowAnimation from "./ArrowAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Slide up and fade content on scroll exit (reference Banner pattern)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="relative z-10 h-full w-full flex flex-col pt-20 overflow-hidden" ref={containerRef}>
      {/* Arrow Animation - positioned at bottom center */}
      <ArrowAnimation />

      {/* Main Content */}
      <main className="flex-1 flex items-center container">
        {/* Vertical Email - Left Side */}
        <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-20">
          <a
            href="mailto:hashimpinjari36@gmail.com"
            className="text-xs text-muted-foreground tracking-widest vertical-text hover:text-foreground transition-colors"
          >
            hashimpinjari36@gmail.com
          </a>
        </div>

        <div className="w-full">
          {/* Left Content */}
          <div className="max-w-2xl lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="slide-up-and-fade"
            >
              <h1 className="hero-title mb-4">
                <span className="text-accent-green">Full Stack</span>
                <br />
                <span className="text-foreground">&nbsp;DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-muted-foreground text-base md:text-lg max-w-md mb-8 leading-relaxed slide-up-and-fade"
            >
              Hi! I&apos;m <span className="text-foreground font-medium">Hashim</span>. A passionate Full Stack Developer focused on building responsive, scalable, and user-friendly web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="slide-up-and-fade"
            >
              <button className="hire-btn group">
                Let's connect
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}



