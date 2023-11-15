'use client';
import React, { useCallback, useState } from 'react';
import './index.style.css';
import Technologies from '@/feature/Projects/Technologies';
import { data, Technology, Project as ProjectType } from '@/data/DataReader';
import Project from '@/feature/Projects/Project';
import { RiCloseFill } from 'react-icons/ri';
import FakeScrollBar from '@/components/FakeScrollBar';

export type FilteredTechs = {
    [key: string]: Technology;
};

export type FilteredProjects = {
    [key: string]: ProjectType;
};

const getFilteredTechsString = (filteredTechs: FilteredTechs): string => {
    const totalTechs = Object.keys(data.technologies).length;

    const filteredTechsArray = Object.values(filteredTechs);

    if (filteredTechsArray.length === totalTechs || filteredTechsArray.length === 0) {
        return 'all';
    }

    return filteredTechsArray.map((tech) => tech.name).join('; ');
};

const getFilteredProjects = (filteredTechs: FilteredTechs): FilteredProjects => {
    const projectsArray = Object.values(data.projects);
    const totalTechs = Object.keys(data.technologies).length;
    const totalFilteredTechs = Object.keys(filteredTechs).length;

    if (totalFilteredTechs === totalTechs || totalFilteredTechs === 0) {
        return data.projects;
    }

    return projectsArray.reduce((acc, project) => {
        const projectTechs = project.tech;

        const hasAllFilteredTechs = projectTechs.some((projectTech) => {
            return !!filteredTechs[projectTech];
        });

        if (hasAllFilteredTechs) {
            return {
                ...acc,
                [project.id]: project,
            };
        }

        return acc;
    }, {} as FilteredProjects);
};

const Projects = () => {
    const [filteredTechs, setFilteredTechs] = useState<FilteredTechs>({} as FilteredTechs);

    const onTechnologyClick = useCallback((technology: Technology) => {
        setFilteredTechs((prevState) => {
            if (prevState[technology.name]) {
                const { [technology.name]: _, ...rest } = prevState;
                return rest;
            }

            return {
                ...prevState,
                [technology.name]: technology,
            };
        });
    }, []);

    const filteredProjects = getFilteredProjects(filteredTechs);

    return (
        <>
            <Technologies onTechnologyClick={onTechnologyClick} filteredTechs={filteredTechs} defaultOpen={true} />

            <div className="my-9 flex-col px-7 lg:my-0 lg:flex lg:flex-1 lg:basis-4/5 lg:px-0">
                <h2 className="text-white lg:hidden">
                    {'// projects '}
                    <span className="text-blue-4"> / {getFilteredTechsString(filteredTechs)}</span>
                </h2>

                <div className="hidden max-w-max gap-16 border-r px-4 py-2.5 lg:flex">
                    {getFilteredTechsString(filteredTechs)}
                    <button>
                        <RiCloseFill size={20} />
                    </button>
                </div>
                <div className="flex lg:h-full lg:border-t">
                    <div className="projects mt-4 flex auto-rows-min flex-col gap-5 lg:mt-0 lg:grid lg:max-h-[70vh] lg:flex-1 lg:grid-cols-3 lg:gap-10 lg:overflow-scroll lg:p-16">
                        {Object.values(data.projects).map((project) => (
                            <Project key={project.id} project={project} isVisible={!!filteredProjects[project.id]} />
                        ))}
                    </div>
                    <FakeScrollBar className="hidden lg:block" />
                </div>
            </div>
        </>
    );
};

export default Projects;
