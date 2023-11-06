'use client';
import React from 'react';
import { data } from '@/data/DataReader';
import HeaderMenuButton from '@/feature/Header/Menu/Button';
import json from '@/../data.json';
import HeaderMenu from '@/feature/Header/Menu';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';

const Header = () => {
    const { isMenuOpen } = useHeaderMenu();

    return (
        <header className="relative flex w-full justify-between border-b border-b-blue-3 p-4">
            <span>{data.logo_name}</span>
            <HeaderMenuButton />
            {isMenuOpen && <HeaderMenu />}
        </header>
    );
};

export default Header;
