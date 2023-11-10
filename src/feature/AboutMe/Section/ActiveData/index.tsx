'use client';
import React from 'react';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';

const AboutMeActiveData = () => {
    const { activeData } = useActiveData();

    return (
        <div className="mt-9 px-7">
            <div>
                <span className="text-white">// {activeData.section.title} </span>
                <span>/ {activeData.sectionInfo.title}</span>
            </div>

            <p className="mt-4">{activeData.infoFile.description}</p>
        </div>
    );
};

export default AboutMeActiveData;
