import React, { ComponentProps, useState } from 'react';
import { AboutSectionInfo } from '@/data/DataReader';
import { FaChevronRight, FaChevronDown, FaFolderClosed } from 'react-icons/fa6';
import AboutMeSectionInfoFile from '@/feature/AboutMe/Section/Info/File';

interface Props extends ComponentProps<'div'> {
    info: AboutSectionInfo;
}

const AboutMeSectionInfo = ({ info, ...rest }: Props) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpenState = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <div>
            <div
                className="flex w-full cursor-pointer items-center gap-3 px-8 py-1 font-medium text-blue-4"
                onClick={toggleOpenState}
                {...rest}
            >
                {isOpened ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />}
                <FaFolderClosed size={16} />
                {info.title}
            </div>
            {!!(isOpened && info.files) && info.files.map((file) => <AboutMeSectionInfoFile file={file} />)}
        </div>
    );
};

export default AboutMeSectionInfo;
