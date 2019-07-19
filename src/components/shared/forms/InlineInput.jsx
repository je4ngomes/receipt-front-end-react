import React from 'react';

const InlineInput = ({ label, labelColor, children: inputElem, error }) => (
    <>
        <span style={{ color: labelColor, marginRight: 10, fontSize: '16pt' }}>{label}</span>
        <div class="input-field inline">
            {inputElem}
            <label for="first_name"></label>
            <span class="helper-text" data-error={error}></span>
        </div>
    </>
);

export default InlineInput;