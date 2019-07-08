import React from 'react'

const Panel = ({ children, bg }) => (
    <div style={{ background: bg, padding: '10px', borderRadius: '5px' }}>
        {children}
    </div>
);

export default Panel;
