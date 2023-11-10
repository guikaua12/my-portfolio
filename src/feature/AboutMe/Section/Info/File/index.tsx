'use client';
import React, { ComponentProps } from 'react';
import { AboutSectionInfoFile } from '@/data/DataReader';
import MIcon from '@/components/MIcon';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';

interface Props extends ComponentProps<'div'> {
    file: AboutSectionInfoFile;
}

const AboutMeSectionInfoFile = ({ file, ...rest }: Props) => {
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
            {file.name}
        </div>
    );
};

export default AboutMeSectionInfoFile;
