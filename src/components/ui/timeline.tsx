import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Link from "next/link";

export interface Experience {
    role: string;
    company: string;
    date: string;
    link?: string;
    haveDone: string[];
    reference?: string;
    reference_role?: string;
    reference_email?: string;
    address: string;
}

interface TimeLineProps {
    experiences: Experience[];
}

export default function BasicTimeline({ experiences }: TimeLineProps) {
    // Track which dropdown is open
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Timeline position="right" sx={{ p: 0, m: 0 }}>
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={index}
                    sx={{
                        minHeight: 72,
                        '&::before': { flex: 0, padding: 0 },
                    }}
                >
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'var(--background)', width: 3 }} />
                        <TimelineDot sx={{ width: 14, height: 14, bgcolor: 'var(--background)', m: 0 }} />
                        {index !== experiences.length - 1 && (
                            <TimelineConnector sx={{ bgcolor: 'var(--background)', width: 3 }} />
                        )}
                        <TimelineConnector sx={{ bgcolor: 'var(--background)', width: 3 }} />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: 2, mt: -0.5 }} className="text-background">
                        <div className="inline-flex items-center mt-2 px-2 py-1 rounded-md text-[12px] font-family-jetbrains font-medium text-background bg-white/10 backdrop-blur-md border border-white/20 mb-1">
                            {exp.date}
                        </div>
                        <div className="font-family-ronzino text-[25px] font-bold tracking-tight">{exp.role}</div>
                        <div className="text-md font-family-ronzino font-light">{exp.company}</div>
                        {exp.link && (
                            <Link
                                href={exp.link}
                                target='blank'
                                className="tracking-tight text-md font-family-ronzino text-gray-500 font-light"
                            >
                                {exp.link}
                            </Link>
                        )}

                        <div className='tracking-tight text-sm font-family-ronzino text-gray-300 font-light'>
                            {exp.haveDone[0]}
                        </div>



                        {/* Dropdown Content */}
                        {openIndex === index && exp.reference && (
                            <div className="mt-2 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-sm">
                                <div className='text-sm'>
                                    <strong>{exp.reference}</strong> - {exp.reference_role}
                                </div>
                                <div className="text-xs text-gray-300">{exp.reference_email}</div>
                            </div>
                        )}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
