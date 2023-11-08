'use client';
import React, { ComponentProps, useState } from 'react';
import { AboutSection } from '@/data/DataReader';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa6';

interface Props extends ComponentProps<'div'> {
    section: AboutSection;
}

const AboutMeSection = ({ section, ...rest }: Props) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpenState = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <div
            className="flex w-full cursor-pointer select-none gap-3 bg-blue-3 py-1 text-white"
            onClick={toggleOpenState}
            {...rest}
        >
            <button className="pl-7">{isOpened ? <FaCaretDown /> : <FaCaretRight />}</button>
            <h2>{section.title}</h2>
        </div>
    );
};

export default AboutMeSection;
