'use client';
import "./sticky-cards.css"

import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import { TextAnimate } from "./text-animate";
import { Check } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const stickyCardsData = [
    {
        type: "intro",
        title: "skills/services.",
        description: "Offering a range of creative and technical solutions to bring ideas to life.",
        highlight: ["creative", "technical", "solutions"],
    },
    {
        type: "service",
        index: "01",
        title: "Website Development",
        description: "Skilled in building responsive and dynamic web applications, with expertise in modern frontend and backend technologies.",
        items: ["Laravel / PHP", "React / Javascript", "Wordpress / Elementor", "Git / Github", "E-Commerce"]
    },
    {
        type: "service",
        index: "02",
        title: "Website Design",
        description: "Passionate in crafting visually appealing and user-friendly designs. Has an eye for harmonious relationship between components.",
        items: ["TailwindCSS", "Bootstrap", "Prototyping / Figma", "Responsiveness", "UI/UX"]
    },
    {
        type: "service",
        index: "03",
        title: "Graphic Design",
        description: "Designing visually striking graphics that communicate ideas clearly and creatively.",
        items: ["Color Theory", "Photoshop", "Canva", "Harmony", "Font Selection"]
    },
    {
        type: "service",
        index: "04",
        title: "Music Production",
        description: "Has a keen ear for detail in music. Passionate in achieving high-quality and modern sounding instrumentals.",
        items: ["FL Studio", "Sound Selection", "Mixing & Mastering", "Compression", "R&B / Hip-hop / Pop"]
    }
]

const StickyCards = ({ onActiveChange }) => {
    const container = useRef(null)

    useGSAP(() => {
        const stickyCards = gsap.utils.toArray(".sticky-card");

        stickyCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end: "bottom center",
                onEnter: () => onActiveChange(index),
                onEnterBack: () => onActiveChange(index),
            });
        });
    }, { scope: container });


    return (
        <div className="sticky-cards md:-mt-32 -mt-15 pb-10 md:pb-24" ref={container}>
            {stickyCardsData.map((cardData, index) => (
                <div
                    className="sticky-card min-h-[100px] md:h-screen"
                    key={index}
                    style={cardData.type === "service" ? { backgroundColor: cardData.color } : {}}
                >
                    <div className="sticky-card-content w-full h-full px-2 md:px-24 flex flex-col  justify-center">
                        <div className="sticky-card-content-wrapper">

                            {cardData.type === "intro" ? (
                                <>
                                    <TextAnimate
                                        animation="blurInUp"
                                        className="tracking-tighter sticky-card-header text-5xl md:text-[110px] font-family-ronzino font-medium w-full"
                                    >
                                        {cardData.title}
                                    </TextAnimate>
                                    <TextAnimate
                                        animation="blurIn"
                                        className="text-sm md:text-2xl font-semibold transition-colors duration-500 text-background md:w-3/4 w-[300px]"
                                        highlight={cardData.highlight}
                                        highlightClassName="text-highlight"
                                    >
                                        {cardData.description}
                                    </TextAnimate>
                                </>
                            ) : (
                                <div className="mt-5 md:mt-0">
                                    <div className="tracking-tight sticky-card-header md:text-8xl text-4xl font-family-ronzino font-medium md:mb-5 mb-3 leading-7 md:leading-18">

                                        <p className="text-lg md:text-3xl">{cardData.index}</p>
                                        {cardData.title}
                                    </div>

                                    <div className="sticky-card-copy">
                                        <div className="md:ml-2 sticky-card-copy-description text-xs md:text-lg text-gray-300 md:w-160 w-70">
                                            <p>{cardData.description}</p>
                                        </div>
                                        <div className="border border-gray-500 md:px-9 px-6 md:py-7 py-4 rounded-lg md:mt-10 mt-5 md:w-full w-[300px]">
                                            {cardData?.items?.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex md:text-[21px] text-xs font-medium gap-6 py-2 items-center ${idx != cardData.items.length - 1 ? "border-b border-gray-700" : ""
                                                        }`}
                                                >
                                                    <div>0{idx + 1}</div>
                                                    <div className="flex-1">{item}</div>
                                                    <div className="mr-2 md:block hidden">
                                                        <Check color="background" size={15} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StickyCards;
