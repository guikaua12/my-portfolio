import { useContext } from 'react';
import { HeaderMobileMenuContext } from '@/feature/Header/Menu/Mobile/context/HeaderMobileMenuContext';

export const useMobileHeaderMenu = () => {
    return useContext(HeaderMobileMenuContext);
};
