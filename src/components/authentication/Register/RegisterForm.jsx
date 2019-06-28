import React from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';


const RegisterForm = (props) => {
    const { 
        onChange,
        onSubmit,
        formData,
        onClickToggleForm
    } = props;

    return (
        <Col s={12} l={6} offset='l3' className="gradient__form z-depth-1">
            <form onSubmit={onSubmit} style={{ padding: '20px 30px', textAlign: 'center' }}>
                <h2 className="white-text" style={{ fontSize: '32pt' }}>Cadastrar</h2>

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
                            className="pink white-text"
                            type="submit">
                            Registrar
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <label style={{ fontSize: '11pt' }}>
                            Ou <span className="pink-text text-accent-2" onClick={onClickToggleForm}>Entrar</span>
                        </label>
                    </Col>                        
                </Row>
            </form>
        </Col>
    )
}

export default RegisterForm;
