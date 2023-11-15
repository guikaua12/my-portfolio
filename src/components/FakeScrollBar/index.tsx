import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const FakeScrollBar = ({ className, ...rest }: ComponentProps<'div'>) => {
    return (
        <div className={twMerge('border-l p-1', className)} {...rest}>
            <div className="hidden bg-blue-4 px-2 py-1 lg:block"></div>
        </div>
    );
};

export default FakeScrollBar;
