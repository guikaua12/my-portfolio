'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';

type HeaderMobileMenuContextType = {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
};

export const HeaderMobileMenuContext = createContext({} as HeaderMobileMenuContextType);

export const HeaderMobileMenuProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640 && isMenuOpen) {
                closeMenu();
            }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <HeaderMobileMenuContext.Provider
            value={{
                isMenuOpen,
                openMenu,
                closeMenu,
                toggleMenu,
            }}
        >
            {children}
        </HeaderMobileMenuContext.Provider>
    );
};
