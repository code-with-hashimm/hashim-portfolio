'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';
import './TechStackSection.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Tech stack data - use only icons that exist in public folder
const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/Tech Stack Icon/js.png' },
        { name: 'React', icon: '/Tech Stack Icon/react.png' },
        { name: 'Next.js', icon: '/Tech Stack Icon/next.webp' },
        { name: 'Tailwind CSS', icon: '/Tech Stack Icon/tailwind.png' },
        { name: 'Bootstrap', icon: '/Tech Stack Icon/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/Tech Stack Icon/node.png' },
        { name: 'Express.js', icon: '/Tech Stack Icon/express.png' },
    ],
    database: [
        { name: 'MongoDB', icon: '/Tech Stack Icon/mongodb.svg' },
        { name: 'MySQL', icon: '/Tech Stack Icon/mysql.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/Tech Stack Icon/git.png' },
    ],
};

export function TechStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Slide-up animation on scroll
    useGSAP(
        () => {
            const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            }).from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    // Exit animation - fade out and move up when scrolling past
    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            }).to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="tech-stack-section">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="tech-stack-categories">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="tech-stack-row" key={key}>
                            <div className="tech-stack-label">
                                <p className="slide-up tech-category-name">
                                    {key}
                                </p>
                            </div>

                            <div className="tech-stack-items">
                                {value.map((item) => (
                                    <div
                                        className="slide-up tech-item"
                                        key={item.name}
                                    >
                                        <div className="tech-icon-wrapper">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="tech-icon-img"
                                            />
                                        </div>
                                        <span className="tech-item-name">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;
