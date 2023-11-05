import React from 'react';
import { data } from '@/data/DataReader';
import { AlignJustify } from 'lucide-react';

const Header = () => {
    return (
        <header className="border-b-blue-3 flex w-full justify-between border-b p-4">
            <span>{data.logo_name}</span>

            <button>
                <AlignJustify />
            </button>
        </header>
    );
};

export default Header;
