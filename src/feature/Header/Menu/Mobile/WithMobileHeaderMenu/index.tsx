'use client';
import React, { ReactNode, useEffect } from 'react';
import { useMobileHeaderMenu } from '@/feature/Header/Menu/Mobile/hook/useMobileHeaderMenu';
import MobileHeaderMenu from '@/feature/Header/Menu/Mobile';

const WithMobileHeaderMenu = ({ children }: { children: ReactNode }) => {
    const { isMenuOpen } = useMobileHeaderMenu();

    if (isMenuOpen) return <MobileHeaderMenu />;

    return children;
};

export default WithMobileHeaderMenu;
