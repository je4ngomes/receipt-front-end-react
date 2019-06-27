import React, { useState } from 'react';

import LoginForm from './LoginForm';

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
        <LoginForm 
            formData={state.formData} 
            formErrors={state.formErrors} 
            onChange={onChange}
            onClickToggleForm={props.onClickToggleForm} 
            onSubmit={onSubmit} />
    )
};

export default Login;