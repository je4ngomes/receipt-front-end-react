import React from 'react';
import Inline from './Inline';

const InlineInput = ({ type='text', error, ...props }) => {
    return (
        <Inline>
            <input className='inputField' type={type} {...props} />
            <label></label>
            <span className="helper-text" data-error={error}></span>
        </Inline>
    );
};

export default InlineInput;
