'use client';
import React, { ComponentProps, useState } from 'react';
import { AboutSection } from '@/data/DataReader';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa6';
import AboutMeSectionInfo from '@/feature/AboutMe/Section/Info';

interface Props extends ComponentProps<'div'> {
    section: AboutSection;
}

const AboutMeSection = ({ section, ...rest }: Props) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpenState = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <section className="cursor-pointer select-none">
            <div className="flex w-full gap-3 bg-blue-3 px-7 py-1 text-white" onClick={handleSectionClick} {...rest}>
                <button className="">{isOpened ? <FaCaretDown /> : <FaCaretRight />}</button>
                <h2>{section.title}</h2>
            </div>
            {!!(isOpened && section.info) && section.info.map((info) => <AboutMeSectionInfo info={info} />)}
        </div>
            {!!(isOpened && section.info) &&
                section.info.map((info) => <AboutMeSectionInfo key={info.title} info={info} />)}
    );
};

export default AboutMeSection;
