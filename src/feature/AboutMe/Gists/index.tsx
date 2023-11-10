'use client';
import React from 'react';
import Gist from '@/feature/AboutMe/Gists/Gist';
import { useQuery } from 'react-query';
import { getAll } from '@/feature/AboutMe/Gists/services/GistService';
import { data } from '@/data/DataReader';
import { RiLoader2Fill } from 'react-icons/ri';

const Gists = () => {
    const query = useQuery('gists', () => getAll(data.contacts.social.github.user));

    const content = {
        loading: (
            <div className="flex items-center justify-center">
                <RiLoader2Fill size={32} className="animate-spin-slow" />
            </div>
        ),
        success: (
            <div className="flex flex-col gap-5">
                {query.status === 'success' && query.data.map((gist) => <Gist key={gist.id} gist={gist} />)}
            </div>
        ),
        error: undefined,
        idle: undefined,
    };

    return (
        <section className="my-9 px-7">
            <h1 className="mb-7 text-white">// Code snippet showcase:</h1>

            {content[query.status]}
        </section>
    );
};

export default Gists;
