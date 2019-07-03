import React, { useState } from 'react';
import { Col } from 'react-materialize';

import LoginForm from './LoginForm';
import login from '../../../assets/images/login.png';

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
                <LoginForm 
                    formData={state.formData} 
                    formErrors={state.formErrors} 
                    onChange={onChange}
                    onSubmit={onSubmit} />
            </Col>
            <Col className='hide-on-med-and-down' m={4} offset='m1' style={{ marginTop: '5.5rem' }}>
                <img className='floatingEffect' src={login} alt=""/>
            </Col>
        </>
    )
};

export default Login;