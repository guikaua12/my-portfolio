import { useContext } from 'react';
import { HeaderMenuContext } from '@/feature/Header/Menu/context/HeaderMenuContext';

export const useHeaderMenu = () => {
    return useContext(HeaderMenuContext);
};
