import React, { useState } from 'react';
import { Container, Row, Col } from 'react-materialize';

import bg from '../../images/bg.png';
import Login from './Login';
import Register from './Register';

const AuthenticationView = (props) => {
    const [toggleForm, setToggleForm] = useState(false);

    const onClickToggleForm = () => setToggleForm(!toggleForm);
    const showLoginContent = () => {
        return (
            <>
                <Col s={4} offset='m1'>
                    <Login onClickToggleForm={onClickToggleForm}/>
                </Col>
                <Col s={4} offset='m1' style={{ marginTop: '4.5rem' }}>
                    <img className='floatingEffect' src={bg} alt=""/>
                </Col>
            </>
        );
    };
    const showRegisterContent = () => {
        return (
            <Col s={6} offset='m3'>
                <Register onClickToggleForm={onClickToggleForm}/>
            </Col>
        );
    };


    return (
        <Container style={{ width: '90%' }}>
            <Row>
                {toggleForm ? showRegisterContent() : showLoginContent()}
            </Row>
        </Container>
    );
};

export default AuthenticationView;