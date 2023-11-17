import React, { useEffect, useRef, useState } from 'react';
import { Project as ProjectType, data } from '@/data/DataReader';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import SVG from 'react-inlinesvg';

interface Props {
    project: ProjectType;
    isVisible: boolean;
}

const Project = ({ project, isVisible }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            if (!isVisible) {
                const event = () => {
                    if (ref.current) {
                        ref.current.style.position = 'absolute';
                        ref.current.style.top = '-999px';
                        ref.current.removeEventListener('transitionend', event);
                    }
                };
                ref.current.addEventListener('transitionend', event);
            } else {
                ref.current.style.position = 'static';
                ref.current.style.top = '0';
            }
        }
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={twMerge(
                'max-h-0 overflow-hidden transition-[max-height] duration-1000',
                isVisible && 'max-h-[500px]'
            )}
        >
            <h1 className="mb-4 font-bold text-secondary-indigo">
                Project {project.id} <span className="font-medium text-blue-4"> / {project.title}</span>
            </h1>
            <div className="flex flex-col overflow-hidden rounded-2xl border">
                {/* image */}
                <div className="relative h-[146px] w-full border-b">
                    <Image
                        src={project.img}
                        alt="Projet image"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
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
