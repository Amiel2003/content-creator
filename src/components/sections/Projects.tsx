'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from '../ui/project-card';
import BentoSlide from '../ui/bento-slide';
import MatigdaAppLogo from '../ui/projects/matigda/app-logo';
import DormyAppLogo from '../ui/projects/dormy/app-logo';
import CrashWatchAppLogo from '../ui/projects/crashwatch/app-logo';

gsap.registerPlugin(ScrollTrigger);

type Project = {
    title: string;
    cover: string[];
    colors: string[];
    paths: string[];
    logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
    link: {
        link: string,
        source: string,
        hasSite: boolean,
        hasSource: boolean,
    };
    videos: string[];
    date: string;
    type: string;
    description: string;
    layout: 'portrait' | 'landscape';
    tags: string[];
};

const projects: Project[] = [
    {
        title: 'AI SNAP',
        cover: [
            '/images/shorts/manny.webp',
            '/images/shorts/drip.webp',
            '/images/shorts/bruce.webp',
            '/images/matigda/sidebar.webp',
        ],
        colors: ['#84745D', '#B99B77', '#D49F4A', '#F5E564', '#F4FE69'],
        logo: MatigdaAppLogo,
        link: {
            link: "https://matigda.com/login",
            source: "",
            hasSite: true,
            hasSource: false,
        },
        paths: [
            'https://www.facebook.com/reel/931654693179338',
            'https://www.facebook.com/reel/902524015992282',
            'https://www.facebook.com/reel/1654775229194177',
        ],
        date: "2026",
        type: "Information System",
        videos: ["Manny in Ancient Rome", "Bruce in Ancient Rome", "Drip in Ancient Greece"],
        description: "Created and directed cinematic AI-generated “what if” videos featuring alternate history scenarios, surreal storytelling, and viral short-form narratives for social media audiences.",
        layout: "portrait",
        tags: ['Veo 3.1', 'Nano Banana Pro', 'Kling 3.0', 'Davinci Resolve'],
    },
    {
        title: 'DIGITAL DUTIES',
        cover: [
            '/images/shorts/taco.webp',
            '/images/shorts/jelly.webp',
            '/images/shorts/kebab.webp',
        ],
        colors: ['#32281A', '#E2BF9E', '#242D2D', '#3B150B', '#AEA495'],
        logo: DormyAppLogo,
        link: {
            link: "",
            source: "https://github.com/OrangeMintz/Dorm-Management-System",
            hasSite: false,
            hasSource: true,
        },
        date: "2026",
        paths: [
            'https://www.youtube.com/shorts/YOqYOQdZMCM',
            'https://www.youtube.com/shorts/W9_ZV3vOfEE',
            'https://www.youtube.com/shorts/3tOXpbOMtng',
        ],
        type: "Information System",
        videos: ["Tacos in Ottoman Empire", "Invention of Turkish Delight", "Kebab Stall in Stone Age"],
        description: "Generated AI-assisted images and videos, then edited them into highly engaging short-form cinematic content optimized for audience retention and viral storytelling.",
        layout: "portrait",
        tags: ['Veo 3.1', 'Nano Banana Pro', 'Kling 3.0', 'Davinci Resolve'],
    },
];

export default function StickyProjects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.sticky-card');

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return;

                const nextCard = cards[index + 1];

                gsap.fromTo(
                    card,
                    { opacity: 1, scale: 1, y: 0 },
                    {
                        opacity: 0,
                        scale: 0.85,
                        y: 40,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: nextCard,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        },
                    }
                );
            });
        },
        { scope: containerRef }
    );

    return (
        <div className="bg-accent-foreground" ref={containerRef}>

            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-accent-foreground text-background py-5 px-6">
                <h1 className="text-xs md:text-lg font-semibold font-family-ronzino">
                    // AI Video Projects
                </h1>
            </div>

            {/* Cards */}
            <div className="w-full md:px-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                <div className="sticky-card sticky top-[15px] flex items-center justify-center pb-10 bg-accent-foreground">
                </div>
            </div>
        </div>
    );
}
