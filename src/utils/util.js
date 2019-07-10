import React from 'react';

const renderLoader = (Component) => (
    <Component 
        style={{ position: 'relative', top: '5rem' }} 
        width={70} 
        height={70} />
);

const customLegendColor = (value) => 
    <span style={{ color: '#fff' }}>{value}</span>


export {
    renderLoader,
    customLegendColor
};