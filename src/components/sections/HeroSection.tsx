"use client";
import React, { useState, useEffect } from "react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { SpotlightLight } from "../ui/spotlightlight";
import Image from "next/image";
import Link from "next/link"
import Silk from "@/components/ui/Silk";

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">

            <div className="md:mt-30 -300 grid grid-cols-1 md:grid-cols-2 p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                {/* Title */}
                <div className="items-start justify-start col-span-1 my-auto md:my-auto mb-7">
                    {/* Text flip component - fade in from top */}
                    <div className={`transition-all duration-700 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4'
                        }`}>
                        <ContainerTextFlip className="ml-1" />
                    </div>

                    {/* First name - slide in from left */}
                    <div
                        style={{ fontFamily: 'var(--font-ronzino)' }}
                        className={`tracking-[-8px] text-9xl md:text-[190px] font-bold text-start text-background -mt-6 transition-all duration-1000 ease-out delay-200 ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-12'
                            }`}
                    >
                        amiel
                    </div>

                    {/* Last name - slide in from left */}
                    <div
                        style={{ fontFamily: 'var(--font-ronzino)' }}
                        className={`tracking-[-15px] text-9xl md:text-[210px] font-bold text-start
    bg-clip-text text-transparent
    bg-gradient-to-b
    from-background
    via-neutral-300
    to-neutral-900
    bg-opacity-50
    -mt-11 md:-mt-18
    transition-all duration-1000 ease-out delay-400
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
  `}
                    >

                        ocier
                    </div>

                    {/* Subtitle - fade in from bottom */}
                    <div
                        style={{ fontFamily: 'var(--font-poppins)' }}
                        className={`tracking-tighter text-xl md:text-4xl font-semibold text-start bg-clip-text text-background -mt-2 ml-3 transition-all duration-1000 ease-out delay-700 ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <AnimatedShinyText>
                            AI Content Creator //
                            Video Editor
                        </AnimatedShinyText>
                    </div>
                    <div className={`flex gap-4 py-3 px-4 transition-all duration-1000 ease-out delay-700 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                        }`}>
                        <Link href={"https://web.facebook.com/amieljay.ocier/"}>
                            <FaFacebook size={25} className="text-background" />
                        </Link>
                        <Link href={"https://www.instagram.com/mr_epee/profilecard/?igsh=MTd0Y2F2em53YW5kbA=="}>
                            <FaInstagram size={25} className="text-background" />
                        </Link>
                        <Link href={"https://x.com/prodbymrepee"}>
                            <FaTwitter size={25} className="text-background" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/amiel-jay-ocier-4446672b1/"}>
                            <FaLinkedin size={25} className="text-background" />
                        </Link>
                    </div>
                </div>

                {/* Image - fade in and scale */}
                <div className={`col-span-1 bg-transparent border-3 border-background w-[75%] md:w-full pt-6 rounded-t-full items-center mx-auto transition-all duration-1200 ease-out delay-300 h-screen ${isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                    }`}
                // style={{
                //     backgroundImage: "url('/images/sitting3.png')",
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     backgroundRepeat: 'no-repeat',
                // }}
                >


                    <Image
                        src="/images/sitting1.webp"
                        alt="Profile picture"
                        width={600}
                        height={750}
                        className="opacity-85 -ml-3 mt-4"
                        priority
                    />



                </div>

            </div>

            <BackgroundRippleEffect />
            <div className="absolute w-screen h-screen opacity-25">
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            {/* <SpotlightLight /> */}
        </div>
    );
}