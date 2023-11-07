import React from 'react';
import Link from 'next/link';

const HeaderMenu = () => {
    return (
        <nav className="space-re h-full bg-blue-2">
            <ul className="flex flex-col text-white">
                <li>
                    <Link href="#" className="inline-block w-full border-b border-b-blue-3 p-4">
                        _hello
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-block w-full border-b border-b-blue-3 p-4">
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
