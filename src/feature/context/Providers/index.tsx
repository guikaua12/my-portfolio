'use client';
import React, { ReactNode, useState } from 'react';
import { HeaderMenuProvider } from '@/feature/Header/Menu/context/HeaderMenuContext';
import { ActiveDataProvider } from '@/feature/AboutMe/Section/ActiveData/context/ActiveDataContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <HeaderMenuProvider>
                <ActiveDataProvider>{children}</ActiveDataProvider>
            </HeaderMenuProvider>
        </QueryClientProvider>
    );
};

export default Providers;
