import React from 'react';
import { Row } from 'react-materialize';

const Header = ({ title }) => (
    <Row>
        <div>
            <h5 className='white-text' style={{ marginLeft: '2rem' }}>
                {title}
            </h5>
            <div className='purple divider'></div>
        </div>
    </Row>
);

export default Header;
