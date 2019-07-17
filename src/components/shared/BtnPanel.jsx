import React, { Children, cloneElement } from 'react';
import { Row } from 'react-materialize';

const BtnPanel = ({ children }) => {
    return (
        <Row style={{ marginBottom: 5 }}>
            {Children.map(
                children, child => cloneElement(child, { style: { marginRight: 5, marginTop: 5 } })
            )}
        </Row>
    );
};

export default BtnPanel;
