import React, { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'section'> {
    title: string;
    children?: ReactNode;
}

const Page = ({ title, children, className, ...rest }: Props) => {
    return (
        <section className={twMerge('font-light', className)} {...rest}>
            <h1 className="px-7 py-5 text-sm text-white">{title}</h1>
            {children}
        </section>
    );
};

export default Page;
