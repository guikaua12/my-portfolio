'use client';
import React, { ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiChatSmile3Fill, RiLoader2Fill } from 'react-icons/ri';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { getFileContent, Gist } from '@/feature/AboutMe/Gists/services/GistService';
import { useQuery } from 'react-query';

interface Props extends ComponentProps<'div'> {
    gist: Gist;
}

const Gist = ({ gist, ...rest }: Props) => {
    const file = Object.values(gist.files)[0];
    const fileContentQuery = useQuery(['gist_file_content', file.filename], () => getFileContent(file));

    const fileContent = {
        loading: (
            <div className="flex items-center justify-center rounded-xl bg-primary-blue-charcoal p-6">
                <RiLoader2Fill size={32} className="animate-spin-slow" />
            </div>
        ),
        success: (
            <SyntaxHighlighter
                language={file.language}
                style={atomOneDark}
                customStyle={{
                    background: '#011221',
                    border: '1px #1E2D3D solid',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                }}
                wraplines="true"
            >
                {fileContentQuery.data}
            </SyntaxHighlighter>
        ),
        error: undefined,
        idle: undefined,
    };

    return (
        <div className="animate-discover" {...rest}>
            <div className="mb-3 flex items-start justify-between">
                <div className="flex">
                    {/* profile image */}
                    <div className="max-h-[36px]">
                        <Image
                            src={gist.owner.avatar_url}
                            alt="Logo image"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    </div>
                    <div className="ml-3 flex flex-col items-center leading-5">
                        <Link className="font-bold text-royal-blue" href="https://github.com/username">
                            @{gist.owner.login}
                        </Link>
                        {/* TODO: implement time ago */}
                        <span className="text-xs">5 months ago</span>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-1 hover:text-white">
                    <RiChatSmile3Fill size={18} />
                    details
                </button>
            </div>

            {fileContent[fileContentQuery.status]}
        </div>
    );
};

export default Gist;
