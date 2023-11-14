'use client';
import React from 'react';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';
import AboutMeSection from '@/feature/AboutMe/Section';
import { RiCloseFill } from 'react-icons/ri';

const AboutMeActiveData = () => {
    const { activeData } = useActiveData();

    return (
        <>
            <div className="mt-9 px-7 sm:mt-0 sm:hidden sm:border-r">
                <div>
                    <span className="text-white">{`// ${activeData.section.title} `}</span>
                    <span>/ {activeData.sectionInfo.title}</span>
                </div>

                <p className="mt-4">{activeData.infoFile.description}</p>
            </div>
            <div className="mt-9 hidden basis-[330px] sm:mt-0 sm:block sm:border-r">
                <AboutMeSection section={activeData.section} />
            </div>
            <div className="hidden basis-1/2 flex-col border-r sm:flex">
                <div className="flex w-full max-w-max items-center justify-between gap-16 border-r bg-blue-2 px-4 py-2.5">
                    <span className="">{activeData.section.title}</span>
                    <button>
                        <RiCloseFill size={20} />
                    </button>
                </div>
                <div className="border-t p-4">{activeData.infoFile.description}</div>
            </div>
        </>
    );
};

export default AboutMeActiveData;
