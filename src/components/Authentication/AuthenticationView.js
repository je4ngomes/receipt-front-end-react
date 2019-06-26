import React from 'react';
import { Container, Row } from 'react-materialize';

import Login from './Login';

const AuthenticationView = (props) => {

    return (
        <Container>
            <Row>
                <Login />
            </Row>
        </Container>
    );
};

export default AuthenticationView;