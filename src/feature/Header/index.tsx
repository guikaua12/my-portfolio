'use client';
import React from 'react';
import { data } from '@/data/DataReader';
import HeaderMenuButton from '@/feature/Header/Menu/Button';
import Link from 'next/link';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';

const Header = () => {
    const { closeMenu } = useHeaderMenu();

    return (
        <header className="flex w-full justify-between border-b border-b-blue-3 p-4">
            <Link href="/" onClick={closeMenu}>
                {data.logo_name}
            </Link>
            <HeaderMenuButton />
        </header>
    );
};

export default Header;
