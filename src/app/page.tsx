import { data } from '@/data/DataReader';

export default function Home() {
    return (
        <section className="relative mt-24 p-7 text-light-gray">
            <span className="relative z-10">Hi all. I am</span>
            <h1 className="relative z-10 text-5xl leading-[56px]">{data.name}</h1>
            <div className="absolute top-0 z-0 h-32 w-32 bg-accent-turquoise blur-[80px]"></div>
            <div className="absolute left-40 top-32 h-32 w-32 bg-secondary-indigo blur-[80px]"></div>
            <h3 className="mt-1 text-xl text-accent-turquoise">{`> ${data.role}`}</h3>
        </section>
    );
}
