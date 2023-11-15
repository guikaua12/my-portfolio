import React from 'react';
import Page from '@/components/Page';
import Projects from '@/feature/Projects';

const ProjectsPage = () => {
    return (
        <Page title="_projects" className="flex-1 lg:flex">
            <Projects />
        </Page>
    );
};

export default ProjectsPage;
