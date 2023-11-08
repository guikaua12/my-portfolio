'use client';
import * as icons from 'react-icons/fa6';
import { IconBaseProps } from 'react-icons';

interface Props extends IconBaseProps {
    name: keyof typeof icons;
}

const Icon = ({ name, ...rest }: Props) => {
    const Icon = icons[name];
    return <Icon {...rest} />;
};

export default Icon;
