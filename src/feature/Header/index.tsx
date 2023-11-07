'use client';
import React from 'react';
import { data } from '@/data/DataReader';
import HeaderMenuButton from '@/feature/Header/Menu/Button';

const Header = () => {
    return (
        <header className="flex w-full justify-between border-b border-b-blue-3 p-4">
            <span>{data.logo_name}</span>
            <HeaderMenuButton />
        </header>
    );
};

export default Header;
