'use client';
import React, { useCallback, useState } from 'react';
import Technologies from '@/feature/Projects/Technologies';
import { data, Technology, Project as ProjectType } from '@/data/DataReader';
import Project from '@/feature/Projects/Project';

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
            <Technologies onTechnologyClick={onTechnologyClick} filteredTechs={filteredTechs} />

            <div className="my-9 px-7">
                <h2 className="text-white">
                    // projects <span className="text-blue-4"> / {getFilteredTechsString(filteredTechs)}</span>
                </h2>

                <div className="mt-4 flex flex-col gap-5 overflow-hidden">
                    {Object.values(data.projects).map((project) => (
                        <Project key={project.id} project={project} isVisible={!!filteredProjects[project.id]} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
