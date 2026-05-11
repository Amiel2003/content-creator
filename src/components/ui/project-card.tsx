'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type Project = {
    title: string;
    cover: string[]; // FIXED: keep this flat for safety
    colors: string[];
    paths: string[];
    logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
    link: {
        link: string;
        source: string;
        hasSite: boolean;
        hasSource: boolean;
    };
    date: string;
    type: string;
    videos: string[];
    description: string;
    layout: 'portrait' | 'landscape';
    tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sticky-card sticky top-[65px] flex justify-center pb-40">
            <div className="relative w-screen min-h-[100svh] md:h-screen overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-15 gap-3 bg-accent-foreground p-2 md:p-3">

                    {/* ================= IMAGE SECTION ================= */}
                    <div className="order-1 md:order-none col-span-1 md:col-span-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                            {project.cover.slice(0, 3).map((image, index) => (
                                <a
                                    key={index}
                                    href={project.paths[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    relative
                    overflow-hidden
                    rounded-sm
                    group
                    ${project.layout === "portrait"
                                            ? "aspect-[9/16]"
                                            : "aspect-[16/9]"
                                        }
                `}
                                >
                                    {/* Image */}
                                    <div
                                        className="
                        absolute inset-0
                        bg-center bg-cover bg-no-repeat
                        transition-all duration-300
                        group-hover:scale-101
                        group-hover:brightness-50
                    "
                                        style={{
                                            backgroundImage: `url(${image})`,
                                        }}
                                    />

                                    {/* Center Text */}
                                    <div
                                        className="
                        absolute inset-0
                        flex items-center justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition-all duration-300
                    "
                                    >
                                        <span
                                            className="
                            text-white
                            text-sm sm:text-base md:text-md
                            font-light
                            tracking-tight
                        "
                                        >
                                            Redirect to Video
                                        </span>
                                    </div>

                                    {/* Bottom Title */}
                                    <div
                                        className="
                        absolute bottom-0 left-0 w-full
                        p-3
                        translate-y-full
                        group-hover:translate-y-0
                        opacity-0
                        group-hover:opacity-100
                        transition-all duration-300
                        bg-gradient-to-t from-black/80 to-transparent
                    "
                                    >
                                        <h3 className="text-white text-xl md:text-xl font-medium tracking-tight">
                                            {project.videos[index]}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* ================= INFO SECTION ================= */}
                    <div
                        className="
                            order-2 md:order-none
                            col-span-1 md:col-span-5
                            flex flex-col
                            border border-background
                            rounded-sm
                            px-4 md:px-12
                            pt-4 md:pt-15
                            pb-10
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start w-full">
                            {/* Mobile links */}
                            <div className="flex gap-2 md:hidden">
                                {project.link.hasSite && (
                                    <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background  duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                        <Globe size={12} />
                                        Website
                                    </button>
                                )}

                                {project.link.hasSource && (
                                    <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background  duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                        <FaGithub size={12} />
                                        Source
                                    </button>
                                )}
                            </div>

                            <p className="ml-auto text-background text-xs md:text-sm font-family-jetbrains">
                                {project.date}
                            </p>
                        </div>

                        {/* Logo */}
                        <div className="mt-4 md:self-start">
                            <div className="flex items-center justify-center">
                                <h1 className='text-background text-4xl md:text-5xl font-family-ronzino tracking-tighter font-bold'>{project.title}</h1>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="md:mt-6 text-xs md:text-sm text-gray-400 font-family-ronzino">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 md:mt-5 mt-3">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="
                                        md:px-3 px-2 md:py-1
                                        text-[9px] md:text-[11px]
                                        rounded-full
                                        bg-white/10
                                        backdrop-blur-md
                                        border border-white/20
                                        text-white
                                        hover:bg-white/20
                                        transition
                                    "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Color Palette */}
                        <div className="mt-auto flex">
                            {project.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="w-12 md:h-24 h-5"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
