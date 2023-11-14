'use client';
import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useMobileHeaderMenu } from '@/feature/Header/Menu/Mobile/hook/useMobileHeaderMenu';

const HeaderMobileMenuButton = () => {
    const { isMenuOpen, toggleMenu } = useMobileHeaderMenu();

    return (
        <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={20} />}
        </button>
    );
};

export default HeaderMobileMenuButton;
