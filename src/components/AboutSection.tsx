"use client";
import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about-me" className="relative z-10 min-h-screen w-full flex flex-col py-16 md:py-24">
            {/* Main Content - Centered with container */}
            <main className="flex-1 flex flex-col justify-center container">
                {/* Large Quote */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="about-quote max-w-5xl mb-16 md:mb-24"
                >
                    I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                </motion.h2>

                {/* Divider with Label and Line After */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-4 mb-10"
                >
                    <div className="h-px bg-white/20 w-full max-w-[60px]"></div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">This is me.</span>
                    <div className="h-px bg-white/20 flex-1 max-w-[200px]"></div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl">
                    {/* Left - Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="about-name">
                            Hi, I&apos;m Hashim.
                        </h3>
                    </motion.div>

                    {/* Right - Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-6"
                    >
                        <p className="about-text">
                            I&apos;m a full stack web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and <span className="text-foreground underline decoration-white/40 underline-offset-4">intuitive</span> user experiences.
                        </p>
                        <p className="about-text">
                            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive <span className="text-foreground underline decoration-white/40 underline-offset-4">tangible results</span>.
                        </p>
                    </motion.div>
                </div>
            </main>
        </section>
    );
}

