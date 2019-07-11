import React from 'react';

const SpinnerRollingSvg = ({ 
    width = 200, 
    height = 200, 
    stroke = '#9575cd',
    style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style={{ ...style, background: 'none', display: 'block', margin: '0 auto' }}>
        <circle cx="50" cy="50" fill="none" stroke={stroke} stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(120.227 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.9s" begin="0s" repeatCount="indefinite"/>
        </circle>
    </svg>
);

export default SpinnerRollingSvg;