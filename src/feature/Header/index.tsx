'use client';
import React from 'react';
import { data } from '@/data/DataReader';
import HeaderMobileMenuButton from './Menu/Mobile/Button';
import Link from 'next/link';
import { useMobileHeaderMenu } from '@/feature/Header/Menu/Mobile/hook/useMobileHeaderMenu';
import DesktopHeaderMenu from '@/feature/Header/Menu/Desktop';

const Header = () => {
    const { closeMenu } = useMobileHeaderMenu();

    return (
        <header className="flex w-full justify-between border-b border-b-blue-3 p-4 sm:p-0">
            <Link className="sm:px-5 sm:py-4" href="/" onClick={closeMenu}>
                {data.logo_name}
            </Link>
            <HeaderMobileMenuButton />
            <DesktopHeaderMenu />
        </header>
    );
};

export default Header;
