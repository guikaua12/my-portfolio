'use client';
import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';

const HeaderMenuButton = () => {
    const { isMenuOpen, toggleMenu } = useHeaderMenu();

    return <button onClick={toggleMenu}>{isMenuOpen ? <FaXmark size={24} /> : <FaBars size={20} />}</button>;
};

export default HeaderMenuButton;
