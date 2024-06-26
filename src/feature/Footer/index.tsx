import React from 'react';
import { data } from '@/data/data';
import Icon from '../../components/Icon';
import Link from 'next/link';

const Footer = () => {
    const findMeAlsoIn = data.contacts.find_me_also_in;

    return (
        <footer className="flex justify-between border-t">
            <span className="p-4">{findMeAlsoIn.title}:</span>

            <div className="flex">
                {findMeAlsoIn.sources.map((source) => (
                    <div key={source.title} className="flex items-center justify-center border-l px-4">
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
