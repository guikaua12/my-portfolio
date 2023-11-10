import React from 'react';
import Page from '@/components/Page';
import AboutMeActiveData from '@/feature/AboutMe/Section/ActiveData';
import Sections from '@/feature/AboutMe/Section/Sections';

const AboutMePage = () => {
    return (
        <Page title="_about-me" className="animate-ping-one-time">
            <Sections />

            <AboutMeActiveData />
        </Page>
    );
};

export default AboutMePage;
