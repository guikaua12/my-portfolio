'use client';
import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';

const HeaderMenuButton = () => {
    const { isMenuOpen, toggleMenu } = useHeaderMenu();

    return <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <AlignJustify />}</button>;
};

export default HeaderMenuButton;
