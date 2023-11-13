'use client';
import React, { useState } from 'react';
import { RiArrowDownSFill, RiArrowRightSFill, RiReactjsFill } from 'react-icons/ri';
import { data } from '@/data/DataReader';
import Technology from '@/feature/Projects/Technologies/Technology';
import { FilteredTechs } from '@/feature/Projects';

interface Props {
    onTechnologyClick?: (technology: Technology) => void;
    filteredTechs: FilteredTechs;
}

const Technologies = ({ onTechnologyClick, filteredTechs }: Props) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpen = () => setIsOpened((prevState) => !prevState);

    return (
        <div>
            <div className="cursor-pointer select-none">
                <div className="flex w-full gap-3 bg-blue-3 px-7 py-1 text-white" onClick={toggleOpen}>
                    <button className="">
                        {isOpened ? <RiArrowDownSFill size={20} /> : <RiArrowRightSFill size={20} />}
                    </button>
                    <h2>projects</h2>
                </div>
                {isOpened && (
                    <div className="px-7 py-1">
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
