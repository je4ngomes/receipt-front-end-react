import React from 'react';

const Header = ({ title }) => (
    <div>
        <h5 className='white-text' style={{ marginLeft: '2rem' }}>
            {title}
        </h5>
        <div className='purple divider'> </div>
    </div>
);

export default Header;
