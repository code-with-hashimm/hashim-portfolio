'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './CodeAbout.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Code lines data - each line has content with syntax highlighting spans
const CODE_LINES = [
    { indent: 1, content: <><span className="code-keyword">class</span> <span className="code-class">Hashim</span> {'{'}</> },
    { indent: 2, content: <span className="code-comment">..// Passionate about building things that matter.</span> },
    { indent: 2, content: <span className="code-comment">··// My vast variety of skills is continuously expanding.</span> },
    { indent: 2, content: <><span className="code-method">constructor</span>() {'{'}</> },
    { indent: 3, content: <><span className="code-keyword">this</span>.<span className="code-property">name</span> = <span className="code-string">&apos;Hashim Pinjari&apos;</span></> },
    { indent: 3, content: <><span className="code-keyword">this</span>.<span className="code-property">role</span> = <span className="code-string">&apos;Full Stack Developer&apos;</span></> },
    { indent: 3, content: <><span className="code-keyword">this</span>.<span className="code-property">email</span> = <span className="code-string">&apos;hashimpinjari36@gmail.com&apos;</span></> },
    { indent: 2, content: '}' },
    { indent: 2, content: <><span className="code-method">education</span>() {'{'}</> },
    { indent: 3, content: <><span className="code-keyword">return</span> [</> },
    { indent: 4, content: <>{'{ '}<span className="code-string">&apos;2024-2027&apos;</span> : <span className="code-string">&apos;Bachelor of Computer Applications (BCA)&apos;</span>{' }'}</> },
    { indent: 3, content: ']' },
    { indent: 2, content: '}' },
    { indent: 2, content: <><span className="code-method">skills</span>() {'{'}</> },
    { indent: 3, content: <><span className="code-keyword">return</span> [ <span className="code-string">&apos;JavaScript&apos;</span>, <span className="code-string">&apos;React&apos;</span>, <span className="code-string">&apos;Next.js&apos;</span>, <span className="code-string">&apos;TypeScript&apos;</span>, <span className="code-string">&apos;Node.js&apos;</span>, <span className="code-string">&apos;Express&apos;</span>, <span className="code-string">&apos;MongoDB&apos;</span>, <span className="code-string">&apos;MySQL&apos;</span>, <span className="code-string">&apos;Tailwind CSS&apos;</span>, <span className="code-string">&apos;Bootstrap&apos;</span>, <span className="code-string">&apos;HTML/CSS/JS&apos;</span>, <span className="code-string">&apos;Git&apos;</span>, <span className="code-string">&apos;Docker&apos;</span> ]</> },
    { indent: 2, content: '}' },
    { indent: 1, content: '}' },
];

export function CodeAbout() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const lines = containerRef.current.querySelectorAll('.code-line');

        // Set initial state
        gsap.set(lines, { opacity: 0, x: -30 });

        // Animate each line with staggered scroll trigger
        lines.forEach((line, index) => {
            gsap.to(line, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: line,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: 0.5,
                    toggleActions: 'play reverse play reverse',
                },
            });
        });
    }, { scope: containerRef });

    return (
        <div className="code-about-container" ref={containerRef}>
            {/* Code block */}
            <div className="code-block">
                {CODE_LINES.map((line, index) => (
                    <div
                        key={index}
                        className="code-line"
                    >
                        <span className="code-line-number">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                            className="code-line-content"
                            style={{ paddingLeft: `${(line.indent - 1) * 1.5}rem` }}
                        >
                            {line.content}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CodeAbout;

