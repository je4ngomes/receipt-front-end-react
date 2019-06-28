import React, { useState } from 'react';
import { Container, Row } from 'react-materialize';

import topLeftCorner from '../../images/top-left-corner.png';
import bottomLeftCorner from '../../images/bottom-left-corner.png';
import bottomRightCorner from '../../images/bottom-right-corner.png';
import Login from './Login';
import Register from './Register';
import ImgCorner from './ImgCorner';

const Authentication = (props) => {
    const [toggleForm, setToggleForm] = useState(false);

    const onClickToggleForm = () => setToggleForm(!toggleForm);
    
    const showLoginContent = () =>
        <Login onClickToggleForm={onClickToggleForm}/>;

    const showRegisterContent = () =>
        <Register onClickToggleForm={onClickToggleForm}/>;

    return (
        <Container style={{ width: '90%' }}>
            <Row>
                {toggleForm ? showRegisterContent() : showLoginContent()}
            </Row>
            <ImgCorner>
                <img src={topLeftCorner} cornerPos='top__left'/>
                <img src={bottomLeftCorner} cornerPos='bottom__left'/>
                <img src={bottomRightCorner} cornerPos='bottom__right'/>
            </ImgCorner>
        </Container>
    );
};

export default Authentication;