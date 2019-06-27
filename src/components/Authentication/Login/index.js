import React, { useState } from './node_modules/react';
import { Col } from './node_modules/react-materialize';

import LoginForm from './LoginForm';
import login from '../../../images/login.png';

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
        const isNotCheckBox = target.type !== 'checkbox';

        setState({ 
            formData: { 
                ...state.formData, 
                [target.name]: isNotCheckBox ? target.value : target.checked 
            } 
        }); 
    };
    
    const onSubmit = (e) => {
        e.preventDefault();

        // ...
    };

    return (
        <>
            <Col s={4} offset='m1'>
                <LoginForm 
                    formData={state.formData} 
                    formErrors={state.formErrors} 
                    onChange={onChange}
                    onClickToggleForm={props.onClickToggleForm} 
                    onSubmit={onSubmit} />
            </Col>
            <Col s={4} offset='m1' style={{ marginTop: '4.5rem' }}>
                <img className='floatingEffect' src={login} alt=""/>
            </Col>
        </>
    )
};

export default Login;