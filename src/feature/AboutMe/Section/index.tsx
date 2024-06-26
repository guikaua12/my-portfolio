'use client';
import React, { ComponentProps, useState } from 'react';
import { AboutSection } from '@/data/data';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa6';
import AboutMeSectionInfo from '@/feature/AboutMe/Section/Info';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';

interface Props extends ComponentProps<'div'> {
    section: AboutSection;
}

const AboutMeSection = ({ section, ...rest }: Props) => {
    // TODO: Add a way to open the section by default
    const [isOpened, setIsOpened] = useState(true /*window.innerWidth >= 1024*/);
    const { activeData } = useActiveData();

    const toggleOpenState = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <section className="cursor-pointer select-none">
            <div
                className="flex w-full gap-3 bg-blue-3 px-7 py-1 text-white lg:border-b lg:bg-blue-2 lg:px-4 lg:py-2.5"
                onClick={toggleOpenState}
                {...rest}
            >
                <button className="">{isOpened ? <FaCaretDown /> : <FaCaretRight />}</button>
                <h2>{section.title}</h2>
            </div>
            {!!(isOpened && section.info) &&
                section.info.map((info) => (
                    <AboutMeSectionInfo key={info.title} info={info} current={activeData.sectionInfo === info} />
                ))}
        </section>
    );
};

export default AboutMeSection;
