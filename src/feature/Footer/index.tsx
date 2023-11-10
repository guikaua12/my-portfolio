import React from 'react';
import { data } from '@/data/DataReader';
import Icon from '../../components/Icon';
import Link from 'next/link';

const Footer = () => {
    const findMeAlsoIn = data.contacts.find_me_also_in;

    return (
        <footer className="flex justify-between border-t border-t-blue-3">
            <span className="p-4">{findMeAlsoIn.title}:</span>

            <div className="flex">
                {findMeAlsoIn.sources.map((source) => (
                    <div key={source.title} className="flex items-center justify-center border-l border-l-blue-3 px-4">
                        <Link href={source.url}>
                            <Icon name={source.icon} size={28} opacity={0.4} />
                        </Link>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
