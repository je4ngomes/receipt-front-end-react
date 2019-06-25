import React, { useState } from 'react';
import '../../App.css';

import Login from './Login';

export default (props) => {
    const [state, setState] = useState({
        formData: {
            username: '',
            password: ''
        },
        formErrors: {
            username: '',
            password: ''
        }
    });

    const onChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value }) 
    };
    const onSubmit = (e) => {
        e.preventDefault();

        console.log(state);
    };

    return (
        <div>
            <Login formData={state.formData} onChange={onChange} onSubmit={onSubmit} />
        </div>
    )
}