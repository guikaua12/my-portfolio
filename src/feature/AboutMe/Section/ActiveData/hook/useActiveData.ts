'use client';
import { useContext } from 'react';
import { ActiveDataContext } from '@/feature/AboutMe/Section/ActiveData/context/ActiveDataContext';

export const useActiveData = () => {
    return useContext(ActiveDataContext);
};
