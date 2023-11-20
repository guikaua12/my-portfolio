'use client';
import React from 'react';
import './index.style.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuery } from 'react-query';
import { getAll } from '@/feature/AboutMe/Gists/services/GistService';
import { data } from '@/data/DataReader';
import Gist from '@/feature/Home/GistsCarousel/Gist';

const HomeGistsCarousel = () => {
    const gists = Array.from({ length: 3 }, (_, i) => i + 1);

    return (
        <div className="gists-carousel z-10 -mt-[7.75rem] hidden max-h-[calc(100vh-17rem)] flex-col gap-4 overflow-hidden lg:flex">
            {gists.map((_) => (
                <SyntaxHighlighter
                    key={_}
                    language="javascript"
                    style={atomOneDark}
                    useInlineStyles={false}
                    data-index={_}
                >
                    {'function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n' +
                        '  const value: T = parseModel(chunk._response, chunk._value);\n' +
                        '  const initializedChunk: InitializedChunk<T> = (chunk: any);\n' +
                        '  initializedChunk._status = INITIALIZED;\n' +
                        '  initializedChunk._value = value;\n' +
                        '  return value;\n' +
                        '}'}
                </SyntaxHighlighter>
            ))}
        </div>
    );
};

const HomeGistsCarouselA = () => {
    const gistsQuery = useQuery('gists', () => getAll({ username: data.contacts.social.github.user, per_page: 5 }), {
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div className="gists-carousel z-10 -mt-[7.75rem] hidden max-h-[calc(100vh-17rem)] flex-col gap-4 overflow-hidden lg:flex">
            {gistsQuery.isSuccess &&
                gistsQuery.data.map((gist, index) => (
                    <Gist key={gist.id} data-index={index + 1} gist={gist}>
                        _
                    </Gist>
                ))}
        </div>
    );
};

export default HomeGistsCarousel;
