import React from 'react';
import { data, Project as ProjectType } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import SVG from 'react-inlinesvg';

interface Props {
    project: ProjectType;
}

const Project = ({ project }: Props) => {
    return (
        <div className="overflow-hidden transition">
            <h1 className="mb-4 font-bold text-secondary-indigo">
                Project {project.id} <span className="font-medium text-blue-4"> / {project.title}</span>
            </h1>
            <div className="flex flex-col overflow-hidden rounded-2xl border">
                {/* image */}
                <div className="relative h-[146px] w-full border-b">
                    <Image
                        src="https://i.imgur.com/B95073j.png"
                        alt="Projet image"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />

                    {/* image text */}
                    <div className="relative inset-0 z-10 flex h-full items-center justify-center">
                        <span className="relative z-10 text-2xl text-white">{project.title}</span>
                    </div>

                    {/* technologies */}
                    <div className="absolute right-4 top-4 flex gap-2 text-primary-blue-charcoal">
                        {project.tech
                            .filter((tech) => !!data.technologies[tech])
                            .map((tech) => (
                                <SVG
                                    key={tech}
                                    className="inline-block rounded-sm p-1"
                                    src={data.technologies[tech].icon}
                                    width={28}
                                    height={28}
                                    style={{
                                        backgroundColor: data.technologies[tech].backgroundColor,
                                        fill: data.technologies[tech].color,
                                    }}
                                />
                            ))}
                    </div>
                </div>
                <div className="bg-primary-blue-charcoal p-8">
                    <p>{project.description}</p>
                    <Link
                        className="mt-6 inline-block rounded-lg bg-mirage px-3.5 py-2.5 text-sm text-white"
                        href={project.url}
                        target="_blank"
                    >
                        view-project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
