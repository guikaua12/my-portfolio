'use client';
import React from 'react';
import { AboutSection, data } from '@/data/DataReader';
import AboutMeSection from '@/feature/AboutMe/Section';
import RemixIcon from '@/components/RemixIcon';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';
import { twMerge } from 'tailwind-merge';

const Sections = () => {
    const { activeData, setActiveData } = useActiveData();
    const onSectionClick = (section: AboutSection) => {
        setActiveData({
            section,
            sectionInfo: section.info[0],
            infoFile: section.info[0].files[0],
        });
    };

    return (
        <>
            {/* desktop */}
            <div className="hidden flex-col gap-8 border-r p-6 lg:flex">
                {data.about.sections.map((section) => (
                    <button onClick={() => onSectionClick(section)}>
                        <RemixIcon
                            className={twMerge('opacity-40', activeData.section === section && 'opacity-100')}
                            name={section.icon}
                            size={24}
                        />
                    </button>
                ))}
            </div>

            {/* mobile */}
            <ul className="flex flex-col gap-1 lg:hidden">
                {data.about.sections.map((section) => (
                    <li key={section.title}>
                        <AboutMeSection section={section} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Sections;
