'use client';
import React from 'react';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuery } from 'react-query';
import { getFileContent, Gist } from '@/feature/AboutMe/Gists/services/GistService';

interface Props extends SyntaxHighlighterProps {
    gist: Gist;
}

const GistComponent = ({ gist, ...rest }: Props) => {
    const file = Object.values(gist.files)[0];
    const fileContentQuery = useQuery(['gist_file_content', file.filename], () => getFileContent(file), {
        staleTime: 1000 * 60 * 5,
    });

    return (
        <SyntaxHighlighter language="javascript" style={atomOneDark} useInlineStyles={false} {...rest}>
            {fileContentQuery.isSuccess && fileContentQuery.data}
        </SyntaxHighlighter>
    );
};

export default GistComponent;
