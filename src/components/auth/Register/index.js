import React, { useState } from 'react';

import RegisterForm from './RegisterForm';
import PaneContainer from '../../shared/PaneContainer';
import { Col } from 'react-materialize';

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
        <Col s={12} l={6} offset='l3'>
            <PaneContainer 
                title='Cadastrar' 
                titleSize='32pt'
                padding='30px 20px 20px' 
                titleColor='#fff' 
                bg='linear-gradient(60deg, #29323c 0%, #485563 100%)'
            >
                <RegisterForm 
                    onChange={onChange}
                    onSubmit={onSubmit}
                    formData={state.formData} />
            </PaneContainer>
        </Col>
    );
};

export default Register;
