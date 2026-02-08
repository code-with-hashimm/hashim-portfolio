"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { DebugPanel } from "@/components/ui/skiper-ui/skiper102";

export function GlobalDebugPanel() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [count, setCount] = useState(0);
    const [keyPressed, setKeyPressed] = useState("");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            setKeyPressed(e.key);
        };

        const handleClick = () => {
            setCount((prev) => prev + 1);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClick);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="fixed bottom-8 right-8 z-50 hidden lg:block"
        >
            <DebugPanel
                mouseX={mouseX}
                mouseY={mouseY}
                count={count}
                keyPressed={keyPressed}
            />
        </motion.div>
    );
}
