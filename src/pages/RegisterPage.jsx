import React from 'react';

import AuthenticationContainer from '../components/shared/AuthenticationContainer';
import Register from '../components/auth/Register';



const RegisterPage = () => {
    return (
        <AuthenticationContainer>
            <Register />
        </AuthenticationContainer>
    )
}

export default RegisterPage
