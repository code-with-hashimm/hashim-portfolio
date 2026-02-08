import { IProject } from '@/types';

// Project data - add more projects here as needed
export const PROJECTS: IProject[] = [
    {
        title: 'E-Commerce Platform',
        slug: 'e-commerce-platform',
        year: 2024,
        description: `
            A full-featured e-commerce platform with modern shopping experience.
            <br/><br/>
            Key Features:
            <ul>
                <li>🛒 Product catalog with search and filtering</li>
                <li>💳 Secure checkout with payment integration</li>
                <li>👤 User authentication and profiles</li>
                <li>📦 Order tracking and management</li>
                <li>📱 Fully responsive design</li>
            </ul>
        `,
        role: `
            Full-Stack Developer
            <ul>
                <li>✅ Built RESTful API backend with Node.js and Express</li>
                <li>🎨 Developed responsive frontend with React</li>
                <li>💾 Designed and implemented MongoDB database schema</li>
                <li>🔐 Implemented JWT authentication</li>
                <li>💰 Integrated payment gateway</li>
            </ul>
        `,
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        thumbnail: '/Project Image/e-commerce.png',
        liveUrl: '#',
    },
    {
        title: 'CampusKey',
        slug: 'campuskey',
        year: 2024,
        description: `
            An all-in-one student resources platform designed to streamline academic life.
            <br/><br/>
            Key Features:
            <ul>
                <li>📚 Centralized access to course materials and notes</li>
                <li>📅 Event management and calendar integration</li>
                <li>🤖 AI-powered study assistant</li>
                <li>👥 Student community and collaboration tools</li>
                <li>🔔 Smart notifications and reminders</li>
            </ul>
        `,
        role: `
            Lead Developer
            <ul>
                <li>✅ Architected full-stack application</li>
                <li>🎨 Built modern UI with responsive design</li>
                <li>🤖 Integrated AI chatbot functionality</li>
                <li>📊 Implemented admin dashboard</li>
                <li>🔐 User authentication and authorization</li>
            </ul>
        `,
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AI/ML'],
        thumbnail: '/Project Image/campuskey.png',
        liveUrl: '#',
    },
];
