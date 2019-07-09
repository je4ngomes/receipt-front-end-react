import React from 'react';

import PanelContainer from './PanelContainer';

const PanelChartContainer = ({ 
    title, 
    children, 
    titleSize = '16pt', 
    titleColor = 'deep-purple-text text-lighten-3'
}) => {
    return (
        <PanelContainer>
            <h5 
                style={{ fontSize: titleSize }} 
                className={`center-align ${titleColor}`}>
                {title}
            </h5>
            <div>
                {children}
            </div>
        </PanelContainer>
    );
};

export default PanelChartContainer;
