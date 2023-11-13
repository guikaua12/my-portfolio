import React, { ComponentProps } from 'react';
import './index.style.css';

const Checkbox = ({ ...rest }: ComponentProps<'input'>) => {
    return <input type="checkbox" className="checkbox" {...rest} />;
};

export default Checkbox;
