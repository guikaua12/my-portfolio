'use client';
import React, { ChangeEventHandler, ComponentProps } from 'react';
import Checkbox from '@/components/Checkbox';
import { Technology } from '@/data/DataReader';
import RemixIcon from '@/components/RemixIcon';

interface Props extends ComponentProps<'div'> {
    technology: Technology;
    isActive: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Technology = ({ technology, isActive, onChange, ...rest }: Props) => {
    return (
        <div className="flex" {...rest}>
            <label className="flex cursor-pointer items-center gap-7">
                <Checkbox name={technology.name} onChange={onChange} checked={isActive} />
                <div className="flex items-center gap-3">
                    <RemixIcon name={technology.icon} size={24} />
                    <span>{technology.name}</span>
                </div>
            </label>
        </div>
    );
};

export default Technology;
