'use client';
import React, { ComponentProps, useState } from 'react';
import { AboutSectionInfo } from '@/data/DataReader';
import { FaChevronRight, FaChevronDown, FaFolderClosed } from 'react-icons/fa6';
import AboutMeSectionInfoFile from '@/feature/AboutMe/Section/Info/File';
import { twMerge } from 'tailwind-merge';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';

interface Props extends ComponentProps<'div'> {
    info: AboutSectionInfo;
    current: boolean;
}

const AboutMeSectionInfo = ({ info, current, ...rest }: Props) => {
    const [isOpened, setIsOpened] = useState(false);
    const { activeData } = useActiveData();

    const toggleOpenState = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <div className="cursor-pointer select-none">
            <div className="flex w-full items-center gap-3 px-8 py-1 text-blue-4" onClick={toggleOpenState} {...rest}>
                {isOpened ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                <FaFolderClosed size={16} />
                <span className={twMerge('hover:text-white', current && 'text-white')}>{info.title}</span>
            </div>
            {!!(isOpened && info.files) &&
                info.files.map((file) => (
                    <AboutMeSectionInfoFile key={file.name} file={file} current={activeData.infoFile === file} />
                ))}
        </div>
    );
};

export default AboutMeSectionInfo;
