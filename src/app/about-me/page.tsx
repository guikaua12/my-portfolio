import React from 'react';
import { data } from '@/data/DataReader';
import Page from '@/components/Page';
import AboutMeSection from '@/feature/AboutMe/Section';
import AboutMeActiveData from '@/feature/AboutMe/Section/ActiveData';

const AboutMePage = () => {
    return (
        <Page title="_about-me" className="animate-ping-one-time">
            <ul className="flex flex-col gap-1">
                {data.about.sections.map((section) => (
                    <li>
                        <AboutMeSection section={section} />
                    </li>
                ))}
            </ul>

            <AboutMeActiveData />
        </Page>
    );
};

export default AboutMePage;
