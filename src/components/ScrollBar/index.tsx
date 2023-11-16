import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'div'> {
    element?: string;
}

const ScrollBar = ({ element, className, ...rest }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (element) {
            const domElement = document.querySelector(element);

            if (domElement) {
                domElement.addEventListener('scroll', (e) => {
                    if (domElement) {
                        const maxScroll = domElement.scrollHeight - domElement.clientHeight;
                        const percentage = (domElement.scrollTop / maxScroll) * 100;

                        let fakeScrollBarHeight = (percentage / 100) * domElement.clientHeight;

                        if (scrollRef.current) {
                            if (percentage >= 98) {
                                fakeScrollBarHeight = fakeScrollBarHeight - 16;
                            }
                            scrollRef.current.style.marginTop = `${fakeScrollBarHeight}px`;
                        }
                    }
                });
            }
        }
    }, [element, scrollRef]);

    return (
        <div className={twMerge('hidden border-l p-1 lg:block', className)} {...rest}>
            <div ref={scrollRef} className={twMerge('w-full bg-blue-4 px-2 py-1')}></div>
        </div>
    );
};

export default ScrollBar;
