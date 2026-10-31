'use client';
import type { IconType } from 'react-icons';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, } from "react-icons/fa";
import Silk from "@/components/ui/Silk";
import Link from 'next/link';

interface Contact {
    name: string;
    link: string;
    icon: string;
    size: number;
}

interface ContactProps {
    contacts?: Contact[];
}

export default function ContactSection({ contacts }: ContactProps) {
    return (
        <div className="relative min-h-screen md:h-screen mt-20 overflow-hidden">

            <div className="absolute w-screen h-screen opacity-25">
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: "url('/images/footer.jpg')" }}
            />

            {/* Top content */}
            <div className="relative items-center flex flex-col md:flex-row md:justify-between z-10 text-background px-4 md:px-6 py-8 md:py-10 gap-8 md:gap-0">
                <div className="font-medium text-4xl md:text-[65px] tracking-[-2px] md:tracking-[-6px]">
                    <span>
                        Let's Connect
                    </span>

                    <div className='flex flex-wrap gap-4 md:gap-7'>
                        {contacts?.map((contact, index) => (
                            <Link target='blank' href={contact.link} key={index}>
                                <div className='flex items-center gap-1' >
                                    {contact.icon == 'facebook' ? <FaFacebookSquare size={contact.size} /> :
                                        contact.icon == 'instagram' ? <FaInstagramSquare size={contact.size} /> :
                                            contact.icon == 'twitter' ?
                                                <FaTwitterSquare size={contact.size} /> : <FaLinkedin size={contact.size} />}

                                    <span className='font-light text-base md:text-xl tracking-[-1px]'>{contact.name}</span>
                                </div>
                            </Link>

                        ))}
                    </div>

                </div>
                <div className="font-family-ronzino pt-5 flex flex-col md:pr-10 w-full md:w-auto">

                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <span className='font-medium text-base md:text-lg'>Address:</span>
                        <p className='text-base md:text-lg font-light text-gray-300'>Purok 10, Poblacion, Cabanglasan, Bukidnon</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <span className='font-medium text-base md:text-lg'>Mail:</span>
                        <p className='text-base md:text-lg font-light text-gray-300 break-all'>oamieljay@gmail.com</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                        <span className='font-medium text-base md:text-lg'>Phone:</span>
                        <p className='text-base md:text-lg font-light text-gray-300'>+63 906 761 0911</p>
                    </div>
                </div>

            </div>
            {/* Peeking bottom content */}
            <div className="absolute bottom-[-100px] md:bottom-[-210px] z-10 text-background place-content-center px-4 md:px-6 mx-auto">
                <div className="font-family-ronzino font-medium text-[80px] md:text-[370px] tracking-[-8px] md:tracking-[-32px]">
                    CONTACT
                </div>
            </div>

        </div>



    )

}