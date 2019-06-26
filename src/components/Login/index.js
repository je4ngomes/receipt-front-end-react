import React, { useState } from 'react';

import LoginForm from './LoginForm';

export default (props) => {
    const [state, setState] = useState({
        formData: {
            username: '',
            password: '',
            rememberMe: false
        },
        formErrors: {
            username: '',
            password: ''
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
            onSubmit={onSubmit} />
    )
};