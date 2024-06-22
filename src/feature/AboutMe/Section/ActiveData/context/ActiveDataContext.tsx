'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { AboutSection, AboutSectionInfo, AboutSectionInfoFile, data } from '@/data/data';

type ActiveDataType = {
    section: AboutSection;
    sectionInfo: AboutSectionInfo;
    infoFile: AboutSectionInfoFile;
};

type ActiveDataContextType = {
    activeData: ActiveDataType;
    setActiveData: Dispatch<SetStateAction<ActiveDataType>>;
};

export const ActiveDataContext = createContext({} as ActiveDataContextType);

export const ActiveDataProvider = ({ children }: { children: ReactNode }) => {
    const [activeData, setActiveData] = useState<ActiveDataType>({
        section: data.about.sections[0],
        sectionInfo: data.about.sections[0].info[0],
        infoFile: data.about.sections[0].info[0].files[0],
    });

    return <ActiveDataContext.Provider value={{ activeData, setActiveData }}>{children}</ActiveDataContext.Provider>;
};
