'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import './Navbar.css';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleNavigation = (url: string) => {
        router.push(url);
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Fixed Hamburger Button - stays in place during scroll */}
            <div className="navbar-toggle-container">
                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    onClick={handleMenuToggle}
                    className={cn('navbar-toggle-btn', { 'is-open': isMenuOpen })}
                >
                    {/* Top hamburger line */}
                    <span className={cn('hamburger-line hamburger-line-top', { 'is-open': isMenuOpen })} />
                    {/* Bottom hamburger line */}
                    <span className={cn('hamburger-line hamburger-line-bottom', { 'is-open': isMenuOpen })} />
                </button>
                {/* MENU text below hamburger - also clickable */}

            </div>

            {/* Dark Overlay */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={cn('navbar-overlay', { 'is-open': isMenuOpen })}
            />

            {/* Slide-in Menu Panel */}
            <div className={cn('navbar-panel', { 'is-open': isMenuOpen })}>
                {/* Curved Background */}
                <div className={cn('navbar-panel-bg', { 'is-open': isMenuOpen })} />

                {/* Menu Content */}
                <div className="navbar-content">
                    <div className="navbar-content-inner">
                        {/* Social Links */}
                        <div className="navbar-section navbar-social">
                            <p className="navbar-section-title">SOCIAL</p>
                            <ul className="navbar-list">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="navbar-social-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Menu Links */}
                        <div className="navbar-section">
                            <p className="navbar-section-title">MENU</p>
                            <ul className="navbar-list">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => handleNavigation(link.url)}
                                            className="navbar-menu-link group"
                                        >
                                            <span
                                                className={cn(
                                                    'navbar-menu-dot',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="navbar-menu-arrow"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="navbar-contact">
                    <p className="navbar-section-title">GET IN TOUCH</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="navbar-contact-email"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
