import React from 'react';
import SelectYear from '../shared/SelectYear';

const ChartHeader = ({ title }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h5 style={{ display: 'inline' }} className='white-text'>
                {title}
            </h5>
            <SelectYear />
        </div>
    );
};

export default ChartHeader;
