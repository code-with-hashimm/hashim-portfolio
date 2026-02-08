"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
            {/* Track */}
            <div className="relative w-1 h-32 bg-white/10 rounded-full overflow-hidden">
                {/* Fill - from top to bottom */}
                <motion.div
                    className="absolute top-0 left-0 w-full bg-accent-green rounded-full origin-top"
                    style={{ scaleY, height: "100%" }}
                />
            </div>
        </div>
    );
}

export function StickyHeader() {
    // Removed scroll-based background - only hamburger button stays visible
    return (
        <header
            className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-20 py-6 pointer-events-none"
        />
    );
}
