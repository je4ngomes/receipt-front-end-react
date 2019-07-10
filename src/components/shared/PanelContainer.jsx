import React from 'react';

const PanelContainer = ({ 
    title, 
    titleSize = '16pt', 
    titleColor = 'deep-purple-text text-lighten-3', 
    children,
    alignTitle = 'center', 
    bg = '#232a33'
}) => (
    <div 
        className='z-depth-1' 
        style={{ 
            background: bg, 
            padding: '10px', 
            borderRadius: '5px' 
    }}>
        {title && (
            <h5 
                style={{ fontSize: titleSize }} 
                className={`${alignTitle}-align ${titleColor}`}>
                {title}
            </h5>
        )}
        <div>
            {children}
        </div> 
    </div>
);

export default PanelContainer;
