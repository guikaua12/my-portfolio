'use client';
import * as icons from 'react-icons/ri';
import { IconBaseProps } from 'react-icons';

interface Props extends IconBaseProps {
    name: keyof typeof icons;
}

const RemixIcon = ({ name, ...rest }: Props) => {
    const Icon = icons[name];
    return <Icon {...rest} />;
};

export default RemixIcon;
