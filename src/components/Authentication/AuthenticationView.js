import React from 'react';
import { 
    Container, 
    Row,
    Col } from 'react-materialize';

import Login from './Login';

const AuthenticationView = (props) => {

    return (
        <Container>
            <Row>
                <Col s={12}>
                    <Login />
                </Col>
            </Row>
        </Container>
    );
};

export default AuthenticationView;