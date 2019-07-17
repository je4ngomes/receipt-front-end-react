import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, TextInput, Button } from 'react-materialize';


const RegisterForm = (props) => {
    const { 
        onChange,
        onSubmit,
        formData
    } = props;

    return (
        <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
            <Row>
                <Col s={6}>
                    <TextInput        
                        noLayout
                        label='Nome'
                        className='inputField'
                        onChange={onChange}
                        value={formData.name}
                        name='name'/>
                </Col>
                <Col s={6}>
                    <TextInput 
                        noLayout
                        label='Sobrenome'
                        className='inputField'
                        onChange={onChange}
                        value={formData.lastName}
                        name='lastName' />
                </Col>
            </Row>

            <Row>
                <Col s={6}>
                    <TextInput        
                        noLayout
                        label='Usuário'
                        className='inputField'
                        onChange={onChange}
                        value={formData.username}
                        name='username'/>
                </Col>
                <Col s={6}>
                    <TextInput 
                        noLayout
                        email
                        label='Email'
                        className='inputField'
                        onChange={onChange}
                        value={formData.email}
                        name='email' />
                </Col>
            </Row>

            <Row>
                <Col s={6}>
                    <TextInput        
                        noLayout
                        password
                        label='Senha'
                        className='inputField'
                        onChange={onChange}
                        value={formData.password}
                        name='password'/>
                </Col>
                <Col s={6}>
                    <TextInput 
                        noLayout
                        password
                        label='Confirma Senha'
                        className='inputField'
                        onChange={onChange}
                        value={formData.passwordConf}
                        name='passwordConf'/>
                </Col>
            </Row>

            <Row>
                <Col s={12}>
                    <Button 
                        style={{ width: '16rem', height: '3rem' }} 
                        flat
                        waves='light' 
                        className="deep-purple lighten-1 white-text"
                        type="submit">
                        Registrar
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <label style={{ fontSize: '11pt' }}>
                        Ou <Link to='/auth/login' className="deep-purple-text text-lighten-3">Entrar</Link>
                    </label>
                </Col>                        
            </Row>
        </form>
    )
}

export default RegisterForm;
