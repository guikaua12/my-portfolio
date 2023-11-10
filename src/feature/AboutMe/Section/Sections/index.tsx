'use client';
import React from 'react';
import { data } from '@/data/DataReader';
import AboutMeSection from '@/feature/AboutMe/Section';

const Sections = () => {
    return (
        <ul className="flex flex-col gap-1">
            {data.about.sections.map((section) => (
                <li key={section.title}>
                    <AboutMeSection section={section} />
                </li>
            ))}
        </ul>
    );
};

export default Sections;
