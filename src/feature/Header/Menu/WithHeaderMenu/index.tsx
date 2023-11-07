'use client';
import React, { ReactNode } from 'react';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';
import HeaderMenu from '@/feature/Header/Menu';

const WithHeaderMenu = ({ children }: { children: ReactNode }) => {
    const { isMenuOpen } = useHeaderMenu();

    if (isMenuOpen) return <HeaderMenu />;

    return children;
};

export default WithHeaderMenu;
