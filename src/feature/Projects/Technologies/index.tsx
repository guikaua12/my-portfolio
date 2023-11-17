'use client';
import React, { useState } from 'react';
import { RiArrowDownSFill, RiArrowRightSFill, RiReactjsFill } from 'react-icons/ri';
import { data } from '@/data/DataReader';
import Technology from '@/feature/Projects/Technologies/Technology';
import { FilteredTechs } from '@/feature/Projects';

interface Props {
    onTechnologyClick?: (technology: Technology) => void;
    filteredTechs: FilteredTechs;
    defaultOpen?: boolean;
}

const Technologies = ({ onTechnologyClick, filteredTechs, defaultOpen = false }: Props) => {
    const [isOpened, setIsOpened] = useState(defaultOpen);

    const toggleOpen = () => setIsOpened((prevState) => !prevState);

    return (
        <div className="lg:basis-1/5 lg:border-r">
            <div className="cursor-pointer select-none">
                <div
                    className="flex w-full gap-3 bg-blue-3 px-7 py-1 text-white lg:border-b lg:bg-blue-2 lg:px-4 lg:py-2.5"
                    onClick={toggleOpen}
                >
                    <button>{isOpened ? <RiArrowDownSFill size={20} /> : <RiArrowRightSFill size={20} />}</button>
                    <h2>projects</h2>
                </div>
                {isOpened && (
                    <div className="mt-2 flex flex-col gap-2 px-7 py-1">
                        {Object.values(data.technologies).map((technology) => (
                            <Technology
                                key={technology.name}
                                technology={technology}
                                isActive={!!filteredTechs[technology.name]}
                                onChange={() => onTechnologyClick && onTechnologyClick(technology)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Technologies;
