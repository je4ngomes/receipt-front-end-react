import React from 'react';
import { Container, Row } from 'react-materialize';

import topLeftCorner from '../../assets/images/top-left-corner.png';
import bottomLeftCorner from '../../assets/images/bottom-left-corner.png';
import bottomRightCorner from '../../assets/images/bottom-right-corner.png';
import ImgCorner from './ImgCorner';

const Authentication = (props) => {
    return (
        <Container style={{ width: '90%' }}>
            <Row>
                {props.children}
            </Row>
            <ImgCorner>
                <img src={topLeftCorner} alt='' cornerPos='top__left'/>
                <img src={bottomLeftCorner} alt='' cornerPos='bottom__left'/>
                <img src={bottomRightCorner} alt='' cornerPos='bottom__right'/>
            </ImgCorner>
        </Container>
    );
};

export default Authentication;