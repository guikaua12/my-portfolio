'use client';
import React from 'react';
import { data } from '@/data/data';
import HeaderMobileMenuButton from './Menu/Mobile/Button';
import Link from 'next/link';
import { useMobileHeaderMenu } from '@/feature/Header/Menu/Mobile/hook/useMobileHeaderMenu';
import DesktopHeaderMenu from '@/feature/Header/Menu/Desktop';

const Header = () => {
    const { closeMenu } = useMobileHeaderMenu();

    return (
        <header className="flex w-full justify-between border-b p-4 lg:p-0">
            <Link className="lg:w-full lg:max-w-[18.75rem] lg:px-5 lg:py-4" href="/" onClick={closeMenu}>
                {data.logo_name}
            </Link>
            <HeaderMobileMenuButton />
            <DesktopHeaderMenu />
        </header>
    );
};

export default Header;
