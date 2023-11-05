import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/feature/Header';
import React from 'react';

const fira_code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Guilherme Kauã | Fullstack Developer',
    description: 'My portfolio website.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${fira_code.className} bg-blue-1 text-blue-4 h-screen w-full p-4`}>
                <div className="border-blue-3 bg-blue-2 h-full rounded-lg border">
                    <Header />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
