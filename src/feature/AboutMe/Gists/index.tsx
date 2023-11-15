'use client';
import React from 'react';
import './index.style.css';
import Gist from '@/feature/AboutMe/Gists/Gist';
import { useQuery } from 'react-query';
import { getAll } from '@/feature/AboutMe/Gists/services/GistService';
import { data } from '@/data/DataReader';
import { RiErrorWarningFill, RiLoader2Fill, RiLoopLeftFill } from 'react-icons/ri';
import ScrollBar from '../../../components/ScrollBar';

const Gists = () => {
    const query = useQuery('gists', () => getAll(data.contacts.social.github.user), {
        staleTime: 1000 * 60 * 5,
    });

    const handleGistsRefetch = () => query.refetch();

    const content = {
        loading: (
            <div className="flex items-center justify-center">
                <RiLoader2Fill size={32} className="animate-spin-slow" />
            </div>
        ),
        success: (
            <div className="gists flex flex-col gap-5 lg:max-h-[60vh]  lg:overflow-auto">
                {query.data?.map((gist) => <Gist key={gist.id} gist={gist} />)}
            </div>
        ),
        error: (
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2 text-red-400">
                    <RiErrorWarningFill size={28} />
                    <p>Error while fetching gists.</p>
                </div>
                <button onClick={handleGistsRefetch} className="text-royal-blue ">
                    <RiLoopLeftFill size={28} />
                </button>
            </div>
        ),
        idle: undefined,
    };

    return (
        <section className="flex basis-1/2 overflow-auto">
            <div className="my-9 flex-1 overflow-auto px-7">
                <h1 className="mb-7 text-white lg:text-blue-4">{'// Code snippet showcase:'}</h1>

                {content[query.status]}
            </div>

            {/* scroll bar */}
            <ScrollBar />
        </section>
    );
};

export default Gists;
