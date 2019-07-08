import React from 'react';

import Authentication from '../components/auth/Authentication';
import Register from '../components/auth/Register';



const RegisterPage = () => {
    return (
        <Authentication>
            <Register />
        </Authentication>
    )
}

export default RegisterPage
