import React from 'react';
import Link from 'next/link';

const DesktopHeaderMenu = () => {
    return (
        <nav className="ml-36 hidden flex-1 justify-between bg-blue-2 sm:flex">
            <ul className="flex divide-x divide-blue-3 border-x border-x-blue-3 text-white">
                <li>
                    <Link href="#" className="inline-block w-full px-8 py-4">
                        _hello
                    </Link>
                </li>
                <li>
                    <Link href="/about-me" className="inline-block w-full p-4">
                        _about-me
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="inline-block w-full p-4">
                        _projects
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-block w-full p-4">
                        _contact-me
                    </Link>
                </li>
            </ul>
            <button className="border-l border-l-blue-3 sm:px-5 sm:py-4">_contact-me</button>
        </nav>
    );
};

export default DesktopHeaderMenu;
