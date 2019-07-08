import React from 'react'

const PanelContainer = ({ children, bg='#232a33' }) => (
    <div 
        className='z-depth-1' 
        style={{ 
            background: bg, 
            padding: '10px', 
            borderRadius: '5px' 
    }}>
        {children}
    </div>
);

export default PanelContainer;
