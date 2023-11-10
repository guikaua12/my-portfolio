'use client';
import React, { ComponentProps } from 'react';
import { AboutSectionInfoFile } from '@/data/DataReader';
import MIcon from '@/components/MIcon';

interface Props extends ComponentProps<'div'> {
    file: AboutSectionInfoFile;
}

const AboutMeSectionInfoFile = ({ file, ...rest }: Props) => {
    return (
        <div className="flex w-full cursor-pointer items-center gap-3 py-1 pl-16 text-blue-4" {...rest}>
            <MIcon />
            {file.name}
        </div>
    );
};

export default AboutMeSectionInfoFile;
