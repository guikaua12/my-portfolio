'use client';
import React, { ReactNode, useState } from 'react';
import { HeaderMobileMenuProvider } from '@/feature/Header/Menu/Mobile/context/HeaderMobileMenuContext';
import { ActiveDataProvider } from '@/feature/AboutMe/Section/ActiveData/context/ActiveDataContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <HeaderMobileMenuProvider>
                <ActiveDataProvider>{children}</ActiveDataProvider>
            </HeaderMobileMenuProvider>
        </QueryClientProvider>
    );
};

export default Providers;
