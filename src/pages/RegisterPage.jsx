import React from 'react';

import Authentication from '../components/authentication/Authentication';
import Register from '../components/authentication/Register';



const RegisterPage = () => {
    return (
        <Authentication>
            <Register />
        </Authentication>
    )
}

export default RegisterPage
