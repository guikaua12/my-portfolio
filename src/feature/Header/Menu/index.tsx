import React from 'react';
import Link from 'next/link';
import { useHeaderMenu } from '@/feature/Header/Menu/hook/useHeaderMenu';

const HeaderMenu = () => {
    const { closeMenu } = useHeaderMenu();

    return (
        <nav className="flex-1 bg-blue-2">
            <ul className="flex flex-col text-white" onClick={closeMenu}>
                <li>
                    <Link href="#" className="inline-block w-full border-b border-b-blue-3 p-4">
                        _hello
                    </Link>
                </li>
                <li>
                    <Link href="/about-me" className="inline-block w-full border-b border-b-blue-3 p-4">
                        _about-me
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-block w-full border-b border-b-blue-3 p-4">
                        _projects
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-block w-full border-b border-b-blue-3 p-4">
                        _contact-me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;
