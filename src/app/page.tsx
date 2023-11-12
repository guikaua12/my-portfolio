import { data } from '@/data/DataReader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
    return (
        <section className="relative mt-24 p-7 text-light-gray">
            <span className="relative z-10">Hi all. I am</span>
            <h1 className="relative z-10 text-5xl leading-[56px]">{data.name}</h1>

            {/*gradient blur effect*/}
            <div className="absolute top-0 z-0 h-32 w-32 bg-accent-turquoise blur-[80px]"></div>
            <div className="absolute left-40 top-32 h-32 w-32 bg-secondary-indigo blur-[80px]"></div>

            {/*role*/}
            <h3 className="mt-1 text-xl text-accent-turquoise">{`> ${data.role}`}</h3>

            <div className="mt-80">
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
        </section>
    );
}
