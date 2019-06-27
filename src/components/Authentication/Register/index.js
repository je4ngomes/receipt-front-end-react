import React, { useState } from 'react';

import RegisterForm from './RegisterForm';

const Register =(props) => {
    const [state, setState] = useState({
        formData: {
            name: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConf: '',
        },
        formErrors: {
            name: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
            passwordConf: null,
        }
    });

    const onChange = ({ target }) => {
        setState({ 
            formData: { 
                ...state.formData, 
                [target.name]: target.value
            } 
        }); 
    };
    
    const onSubmit = (e) => {
        e.preventDefault();

        // ...
    };

    return (
        <RegisterForm 
            onChange={onChange}
            onSubmit={onSubmit}
            formData={state.formData}
            onClickToggleForm={props.onClickToggleForm}/>
    );
};

export default Register;
