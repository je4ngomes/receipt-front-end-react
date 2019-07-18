import React from 'react';

const Checkbox = ({ label='', ...props }) => (
    <p>
        <label>
            <input type="checkbox" className="filled-in" {...props} />
            <span>{label}</span>
        </label>
    </p> 
);

export default Checkbox;