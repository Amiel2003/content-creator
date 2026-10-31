import BasicTimeline from '../ui/timeline';
import Education from './Education';
import TechStack from '../ui/tech-stack';

const Experience = () => {

    const experiences = [
        {
            role: "Creative Specialist & Editor (Remote)",
            company: "Lumen and Forge LLC",
            date: "May 2026",
            link: "https://lumenandforge.com/",
            haveDone: [
                "Edited and color-graded videos showcasing Lumen & Forges immersive projection projects for high-profile clients, incorporating AI-generated assets, motion graphics, and visual storytelling. Also designed engaging pitch decks.",
            ],
            reference: "Jayson L. Tadayca",
            reference_role: "Lead Developer",
            reference_email: "jaysontadayca@gmail.com",
            address: "Las Vegas, Nevada"
        },
        {
            role: "AI Video Editor for DIGITALDUTIES (Freelance)",
            company: "DIGITAL DUTIES",
            date: "March 2026",
            link: "https://www.youtube.com/@TIMELESSDUTIES",
            haveDone: [
                "Video Editor for DIGITALDUTIES (Freelance) Generated AI-assisted images and videos,then edited them into highly engaging short-form cinematic content optimized for audience retention and viral storytelling.",
            ],
            reference: "Mary Jane E. Nazareno",
            reference_role: "HR Assistant",
            reference_email: "m_nazareno@logicbaseinteractive.com",
            address: "Cagayan De Oro City, Misamis Oriental"

        },
        {
            role: "Founder & Creative Director of AI Snap",
            company: "AI Snap",
            date: "February 2026",
            link: "https://www.facebook.com/people/AI-Snap/61588506600527/",
            haveDone: [
                "Created and directed cinematic AI-generated “what ifvideos featuring alternate history scenarios, surreal storytelling, and viral short-form narratives for social media audiences."
            ],
            address: "Malaybalay City, Bukidnon"


        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-15 px-4 md:px-14 bg-accent-foreground min-h-screen md:h-screen gap-8 md:gap-17'>
            <div className='col-span-1 pt-6 md:pt-10 pb-14 md:pb-28 flex flex-col gap-5 md:gap-7'>
                <div className='text-4xl md:text-7xl font-family-ronzino tracking-tighter text-background font-medium'>Experience</div>
                <BasicTimeline experiences={experiences} />
            </div>

            <div className='col-span-1 pt-6 md:pt-10 pb-14 md:pb-28 flex flex-col gap-5 md:gap-7'>
                <div className='text-4xl md:text-7xl font-family-ronzino tracking-tighter text-background font-medium'>Education</div>
                <Education />
                {/* <div className='text-2xl md:text-4xl font-family-ronzino tracking-tighter text-background font-medium -mb-5'>Tech Stack</div> */}
                {/* <TechStack /> */}
            </div>
        </div>

    );
}

export default Experience;
