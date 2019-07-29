import React from 'react';

const renderLoader = (Loader) => (
    <Loader 
        style={{ position: 'relative', top: '5rem' }} 
        width={70} 
        height={70} />
);

const spanColor = (color, value) => (
    <span style={{ color }}>{value}</span>
);

const customLegendColor = (value) => (
    <span style={{ color: '#fff' }}>{value}</span>
);

export {
    renderLoader,
    spanColor,
    customLegendColor
};