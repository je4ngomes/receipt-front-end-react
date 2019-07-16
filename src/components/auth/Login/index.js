import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Col } from 'react-materialize';

import LoginForm from './LoginForm';
import PaneContainer from '../../shared/PaneContainer';
import login from '../../../assets/images/login.png';

const useStyles = makeStyles({
    paperRoot: {
        backgroundColor: ''
    }
});

const Login = (props) => {
    const [state, setState] = useState({
        formData: {
            username: '',
            password: '',
            rememberMe: false
        },
        formErrors: {
            username: null,
            password: null
        }
    });

    const onChange = ({ target }) => {
        const { name, value, checked } = target;
        const isNotCheckBox = target.type !== 'checkbox';

        setState({ 
            formData: { 
                ...state.formData, 
                [name]: isNotCheckBox ? value : checked 
            } 
        }); 
    };
    
    const onSubmit = (e) => {
        e.preventDefault();

        // ...
    };

    return (
        <>
            <Col s={12} m={10} l={5} offset='l1 m1'>
                <PaneContainer 
                    title='Login' 
                    titleSize='32pt'
                    padding='30px 20px 20px' 
                    titleColor='#fff' 
                    bg='linear-gradient(60deg, #29323c 0%, #485563 100%)'
                >
                    <LoginForm 
                        formData={state.formData} 
                        formErrors={state.formErrors} 
                        onChange={onChange}
                        onSubmit={onSubmit} />
                </PaneContainer>

            </Col>
            <Col className='hide-on-med-and-down' m={4} offset='m1' style={{ marginTop: '5.5rem' }}>
                <img className='floatingEffect' src={login} alt=""/>
            </Col>
        </>
    )
};

export default Login;