'use client';
import React, { ComponentProps } from 'react';
import { AboutSectionInfoFile } from '@/data/data';
import MIcon from '@/components/MIcon';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'div'> {
    file: AboutSectionInfoFile;
    current: boolean;
}

const AboutMeSectionInfoFile = ({ file, current, ...rest }: Props) => {
    const { setActiveData } = useActiveData();
    const handleFileClick = () => {
        setActiveData({
            section: file.parent.parent,
            sectionInfo: file.parent,
            infoFile: file,
        });
    };

    return (
        <div
            className="flex w-full cursor-pointer items-center gap-3 py-1 pl-16 text-blue-4"
            onClick={handleFileClick}
            {...rest}
        >
            <MIcon />
            <span className={twMerge('hover:text-white', current && 'text-white')}>{file.name}</span>
        </div>
    );
};

export default AboutMeSectionInfoFile;
