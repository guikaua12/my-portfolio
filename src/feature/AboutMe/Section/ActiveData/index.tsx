'use client';
import React from 'react';
import './index.style.css';
import { useActiveData } from '@/feature/AboutMe/Section/ActiveData/hook/useActiveData';
import AboutMeSection from '@/feature/AboutMe/Section';
import { RiCloseFill } from 'react-icons/ri';
import ScrollBar from '../../../../components/ScrollBar';

const AboutMeActiveData = () => {
    const { activeData } = useActiveData();

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
                    <span className="">{activeData.section.title}</span>
                    <button>
                        <RiCloseFill size={20} />
                    </button>
                </div>
                <div className="flex flex-1 overflow-auto border-t">
                    <div
                        className="active-info--content flex-1 overflow-scroll p-4"
                        dangerouslySetInnerHTML={{ __html: activeData.infoFile.description }}
                    ></div>
                    <ScrollBar element=".active-info--content" />
                </div>
            </div>
        </>
    );
};

export default AboutMeActiveData;
