import React, { Children, cloneElement } from 'react';
import { Row } from 'react-materialize';

const ActionsPanel = ({ children }) => {
    return (
        <Row style={{ marginBottom: 5 }}>
            {Children.map(
                children, child => cloneElement(child, { style: { marginRight: 5, marginTop: 5 } })
            )}
        </Row>
    );
};

export default ActionsPanel;
