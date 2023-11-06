'use client';
import { createContext, ReactNode, useState } from 'react';

type HeaderMenuContextType = {
    isMenuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
};

export const HeaderMenuContext = createContext({} as HeaderMenuContextType);

export const HeaderMenuProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <HeaderMenuContext.Provider
            value={{
                isMenuOpen,
                openMenu,
                closeMenu,
                toggleMenu,
            }}
        >
            {children}
        </HeaderMenuContext.Provider>
    );
};
