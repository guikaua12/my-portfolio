import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { data } from '@/data/data';

const DesktopHeaderMenu = () => {
    const pathname = usePathname();
    // const x = useRouter();

    return (
        <nav className="hidden flex-1 justify-between bg-blue-2 lg:flex">
            <ul className="flex divide-x divide-blue-3 border-x text-blue-4">
                <li>
                    <Link
                        href="/"
                        className={twMerge(
                            'inline-block w-full px-8 py-4',
                            pathname === '/' && 'border-b-2 border-b-amber-500 text-white'
                        )}
                    >
                        _hello
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about-me"
                        className={twMerge(
                            'inline-block w-full p-4',
                            pathname === '/about-me' && 'border-b-2 border-b-amber-500 text-white'
                        )}
                    >
                        _about-me
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={twMerge(
                            'inline-block w-full p-4',
                            pathname === '/projects' && 'border-b-2 border-b-amber-500 text-white'
                        )}
                    >
                        _projects
                    </Link>
                </li>
            </ul>
            <a className="border-l lg:px-5 lg:py-4" href={`mailto: ${data.contacts.direct.sources.email}`}>
                _contact-me
            </a>
        </nav>
    );
};

export default DesktopHeaderMenu;
