import React from 'react';

const LiquidSvg = ({ 
    width = 200, 
    height = 200, 
    stroke = '#b39ddb', 
    fill='#7e57c2',
    style = {} 
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} height={`${height}px`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-liquid" style={{ ...style, background: 'none', display: 'block', margin: '0 auto' }}>
        <circle cx="50" cy="50" fill="none" r="40" stroke={stroke} stroke-width="5"/>
        <path d="M 15 50 Q 32.5 43.5144 50 50 Q 67.5 56.4856 85 50 A 35 35 0 0 1 15 50" fill={fill}>
            <animate attributeName="d" calcMode="spline" values="M15 50 Q32.5 40 50 50 Q67.5 60 85 50 A35 35 0 0 1 15 50;M15 50 Q32.5 60 50 50 Q67.5 40 85 50 A35 35 0 0 1 15 50;M15 50 Q32.5 40 50 50 Q67.5 60 85 50 A35 35 0 0 1 15 50" keyTimes="0;0.5;1" dur="0.8" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"/>
        </path>
    </svg>
);

export default LiquidSvg;