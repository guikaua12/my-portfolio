import { data } from '@/data/DataReader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
    const gists = Array.from({ length: 5 });

    return (
        <section className="relative mt-24 p-7 text-light-gray lg:pb-2">
            {/*primary-blue-charcoal*/}
            <div className="mx-0 flex gap-16 lg:mx-72">
                <div>
                    <span className="relative z-10">Hi all. I am</span>
                    <h1 className="relative z-10 text-5xl leading-[56px]">{data.name}</h1>

                    {/* role */}
                    <h3 className="mt-1 text-xl text-accent-turquoise">{`> ${data.role}`}</h3>

                    {/* GitHub profile */}
                    <div className="mt-80 lg:mt-20">
                        <span className="text-blue-4">{'// find my profile on GitHub:'}</span>

                        <SyntaxHighlighter
                            language="javascript"
                            style={atomOneDark}
                            customStyle={{
                                background: 'none',
                            }}
                            wrapLongLines
                        >
                            {`const githubLink = '${data.contacts.social.github.url}'`}
                        </SyntaxHighlighter>
                    </div>
                </div>
                <div className="z-10 -mt-[7.75rem] hidden max-h-[calc(100vh-17rem)] flex-col gap-4 overflow-hidden lg:flex">
                    {gists.map((_) => (
                        <SyntaxHighlighter
                            language="javascript"
                            style={atomOneDark}
                            customStyle={{
                                backgroundColor: '#011221',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                flexShrink: '0',
                                flexGrow: '0',
                            }}
                            wrapLongLines
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
            </div>

            {/*gradient blur effect*/}
            <div className="absolute top-0 z-0 h-32 w-32 bg-accent-turquoise blur-[80px] lg:left-[50%] lg:h-[240px] lg:w-[240px] lg:blur-[150px]"></div>
            <div className="absolute left-40 top-32 h-32 w-32 bg-secondary-indigo blur-[80px] lg:left-[65%] lg:top-[35%] lg:h-[190px] lg:w-[190px] lg:blur-[120px]"></div>
        </section>
    );
}
