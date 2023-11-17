import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/feature/Header';
import React from 'react';
import WithMobileHeaderMenu from '../feature/Header/Menu/Mobile/WithMobileHeaderMenu';
import Footer from '@/feature/Footer';
import Providers from '@/feature/context/Providers';

const fira_code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Guilherme Kauã | Fullstack Developer',
    description: 'My portfolio website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full w-full">
            <Providers>
                <body
                    className={`${fira_code.className} min-h-full w-full items-center bg-blue-1 p-4 text-blue-4 lg:flex lg:p-0`}
                >
                    <div className="flex min-h-[calc(100vh-2rem)] flex-col rounded-lg border bg-blue-2 lg:mx-16 lg:h-[calc(100vh-8rem)] lg:min-h-max lg:flex-grow lg:overflow-hidden">
                        <Header />
                        <WithMobileHeaderMenu>{children}</WithMobileHeaderMenu>
                        <Footer />
                    </div>
                </body>
            </Providers>
        </html>
    );
}
