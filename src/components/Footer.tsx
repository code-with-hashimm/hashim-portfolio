'use client';

import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

// Icon mapping for social links
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
    GitHub: <Github size={20} />,
    LinkedIn: <Linkedin size={20} />,
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section" id="contact">
            <div className="container">
                {/* Contact CTA */}
                <div className="footer-cta">
                    <p className="footer-cta-text">connect with me</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="footer-email"
                    >
                        <Mail size={24} className="footer-email-icon" />
                        {GENERAL_INFO.email}
                    </a>
                </div>

                {/* Social Links */}
                <div className="footer-social">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label={link.name}
                        >
                            {SOCIAL_ICONS[link.name] || link.name}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} {GENERAL_INFO.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
