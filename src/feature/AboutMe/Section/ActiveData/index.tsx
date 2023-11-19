'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import './index.style.css';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';
import AboutMeSection from '@/feature/AboutMe/Section';
import { RiCloseFill } from 'react-icons/ri';
import ScrollBar from '../../../../components/ScrollBar';
import { twMerge } from 'tailwind-merge';

const AboutMeActiveData = () => {
    const { activeData } = useActiveData();
    const [lines, setLines] = useState<number[]>([1]);

    const updateLines = useCallback(() => {
        const domElement = document.querySelector('.file-description--content') as HTMLElement;

        if (!domElement) return;

        const style = window.getComputedStyle(domElement);
        const lineHeight = parseInt(style.lineHeight);
        const maxHeight = domElement.offsetHeight;
        const newLines = Array.from({ length: Math.floor(maxHeight / lineHeight) + 1 }, (_, i) => i + 1);

        setLines(newLines);
    }, []);

    useEffect(() => {
        updateLines();
        window.addEventListener('resize', updateLines);
        window.addEventListener('click', updateLines);

        return () => {
            window.removeEventListener('resize', updateLines);
            window.removeEventListener('click', updateLines);
        };
    }, []);

    const getLineCommentString = (line: number) => {
        if (line === 1) return '/**';
        else if (line === lines.length) return ' */';
        else return ' *';
    };

    return (
        <>
            <div className="mt-9 px-7 lg:mt-0 lg:hidden lg:border-r">
                <div>
                    <span className="text-white">{`// ${activeData.section.title} `}</span>
                    <span>/ {activeData.sectionInfo.title}</span>
                </div>

                <p className="mt-4" dangerouslySetInnerHTML={{ __html: activeData.infoFile.description }}></p>
            </div>
            <div className="mt-9 hidden basis-[330px] lg:mt-0 lg:block lg:border-r">
                <AboutMeSection section={activeData.section} />
            </div>
            <div className="hidden basis-1/2 flex-col border-r lg:flex">
                <div className="flex w-full max-w-max items-center justify-between gap-16 border-r bg-blue-2 px-4 py-2.5">
                    <span className="">{`${activeData.sectionInfo.title}/${activeData.infoFile.name}.txt`}</span>
                    <button>
                        <RiCloseFill size={20} />
                    </button>
                </div>

                <div className="flex overflow-hidden border-t">
                    <div className="active-data--editor flex flex-1 overflow-auto">
                        {/* line numbers */}
                        <div className="ml-9 py-4">
                            {lines.map((line) => (
                                <div key={line} className={twMerge(line < 10 && 'ml-2.5')}>
                                    {line}
                                </div>
                            ))}
                        </div>

                        {/* line comments */}
                        <div className="ml-9 py-4">
                            {lines.map((line) => (
                                <div key={line} className={twMerge(line > 1 && 'ml-2.5')}>
                                    {getLineCommentString(line)}
                                </div>
                            ))}
                        </div>

                        {/* file description */}
                        <div className="file-description--container flex-1 py-4">
                            <p
                                className="file-description--content"
                                dangerouslySetInnerHTML={{ __html: activeData.infoFile.description }}
                            ></p>
                        </div>
                    </div>
                    {/* scroll bar*/}
                    <ScrollBar element=".active-data--editor" />
                </div>
            </div>
        </>
    );
};

export default AboutMeActiveData;
