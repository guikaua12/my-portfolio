import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/feature/Header';
import React from 'react';
import { HeaderMenuProvider } from '@/feature/Header/Menu/context/HeaderMenuContext';
import WithHeaderMenu from '@/feature/Header/Menu/WithHeaderMenu';
import Footer from '@/feature/Footer';

const fira_code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Guilherme Kauã | Fullstack Developer',
    description: 'My portfolio website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <HeaderMenuProvider>
                <body className={`${fira_code.className} h-screen w-full bg-blue-1 p-4 text-blue-4`}>
                    <div className="flex min-h-full flex-col overflow-auto rounded-lg border border-blue-3 bg-blue-2">
                        <Header />
                        <WithHeaderMenu>
                            <main className="flex-1">{children}</main>
                        </WithHeaderMenu>
                        <Footer />
                    </div>
                </body>
            </HeaderMenuProvider>
        </html>
    );
}
