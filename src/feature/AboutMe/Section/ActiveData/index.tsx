'use client';
import React, { useState } from 'react';
import { data, AboutSection, AboutSectionInfo, AboutSectionInfoFile } from '@/data/DataReader';

type ActiveData = {
    section: AboutSection;
    sectionInfo: AboutSectionInfo;
    infoFile: AboutSectionInfoFile;
};

const AboutMeActiveData = () => {
    const [activeData, setActiveData] = useState<ActiveData>({
        section: data.about.sections[0],
        sectionInfo: data.about.sections[0].info[0],
        infoFile: data.about.sections[0].info[0].files[0],
    });

    return (
        <div className="px-7 py-9">
            <div>
                <span className="text-white">// {activeData.section.title} </span>
                <span>/ {activeData.sectionInfo.title}</span>
            </div>

            <p className="mt-4">{activeData.infoFile.description}</p>
        </div>
    );
};

export default AboutMeActiveData;
