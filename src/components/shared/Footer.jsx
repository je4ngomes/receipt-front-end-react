import React from 'react';
import { Row, Col } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{ padding: 20, marginTop: '3rem', background: '#212529' }}>
            <Row style={{ marginBottom: 0 }}>
                <Col m={3}>
                   <span style={{ fontSize: '12pt' }} className='grey-text'>
                       Created By Cyrax
                    </span>
                </Col>
                <Col m={3}>
                    <a className='grey-text' style={{ marginRight: 7 }} href="https://github.com/nightw0lff" rel="noopener noreferrer" target='_blank'>
                        <FontAwesomeIcon 
                            icon={faGithub}
                            style={{ fontSize: '16pt', color: '#9e9e9e' }}/>
                        {' '} Github
                    </a>
                    <a className='grey-text' href="https://www.linkedin.com/in/jean-de-jesus-640304133/" rel="noopener noreferrer" target='_blank'>
                        <FontAwesomeIcon 
                            icon={faLinkedin} 
                            style={{ fontSize: '16pt', color: '#9e9e9e' }}/>
                        {' '} LinkedIn
                    </a>
                </Col>
                <Col m={3} offset='m3'>
                   <span style={{ fontSize: '10pt' }} className='grey-text'>
                       © 2019 Sistema Financeiro
                    </span> 
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
