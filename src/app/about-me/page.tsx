import React from 'react';
import Page from '@/components/Page';
import AboutMeActiveData from '@/feature/AboutMe/Section/ActiveData';
import Sections from '@/feature/AboutMe/Section/Sections';
import Gists from '@/feature/AboutMe/Gists';

const AboutMePage = () => {
    return (
        <Page title="_about-me">
            <Sections />

            <AboutMeActiveData />

            <Gists />
        </Page>
    );
};

export default AboutMePage;
