import React, { useState } from './node_modules/react';
import { Container, Row } from './node_modules/react-materialize';

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
                <img src={topLeftCorner} position='top_left_corner' alt=""/>
                <img src={bottomLeftCorner} position='bottom_left_corner' alt=""/>
                <img src={bottomRightCorner} position='bottom_right_corner' alt=""/>
            </ImgCorner>
        </Container>
    );
};

export default Authentication;