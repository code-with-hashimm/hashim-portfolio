"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CodeAbout } from "./CodeAbout";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Entry animation — slide up from below as section enters viewport
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: containerRef }
    );

    // Exit animation — slide up and fade out as section leaves viewport
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="about-me" className="relative z-10 min-h-screen w-full flex flex-col py-16 md:py-24">
            {/* Main Content - Centered with container */}
            <main className="flex-1 flex flex-col justify-center container" ref={containerRef}>
                {/* Large Quote */}
                <h2 className="about-quote max-w-5xl mb-16 md:mb-24 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
                </h2>

                {/* Divider with Label and Line After */}
                <div className="flex items-center gap-4 mb-10 slide-up-and-fade">
                    <div className="h-px bg-white/20 w-full max-w-[60px]"></div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">This is me.</span>
                    <div className="h-px bg-white/20 flex-1 max-w-[200px]"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl">
                    {/* Left - Name */}
                    <div className="slide-up-and-fade">
                        <h3 className="about-name">
                            Hi, I&apos;m Hashim.
                        </h3>
                    </div>

                    {/* Right - Description */}
                    <div className="flex flex-col gap-6">
                        <p className="about-text slide-up-and-fade">
                            I&apos;m a full stack web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and <span className="text-foreground underline decoration-white/40 underline-offset-4">intuitive</span> user experiences.
                        </p>
                        <p className="about-text slide-up-and-fade">
                            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive <span className="text-foreground underline decoration-white/40 underline-offset-4">tangible results</span>.
                        </p>
                    </div>
                </div>

                {/* Code-style About */}
                <div className="mt-8 md:mt-12">
                    <CodeAbout />
                </div>
            </main>
        </section>
    );
}

