import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, TextInput, Checkbox, Button } from 'react-materialize';

const LoginForm = (props) => {
    const { 
        onChange,
        onSubmit,
        formData
    } = props;
    
    return (
        <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
            <Row>
                <Col s={10} offset='s1'>
                    <TextInput        
                        noLayout
                        label='Usuário'
                        className='inputField'
                        onChange={onChange}
                        value={formData.username}
                        name='username'/>
                </Col>
            </Row>

            <Row>
                <Col s={10} offset='s1'>
                    <TextInput 
                        noLayout
                        password
                        label='Senha'
                        className='inputField'
                        onChange={onChange}
                        value={formData.password}
                        name='password' />
                </Col>
            </Row>

            <Row>
                <Col s={6}>
                    <Checkbox 
                        label='Lembrar de mim' 
                        filledIn
                        onChange={onChange}
                        checked={formData.rememberMe}
                        value='' 
                        name='rememberMe'/>
                </Col>
                <Col s={6}>
                    <label style={{ fontSize: '11pt' }}>
                        <span className="deep-purple-text text-lighten-3">Esqueceu a senha?</span>
                    </label>
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
                        Entrar
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <label style={{ fontSize: '11pt' }}>
                        Ou <Link to='/auth/register' className="deep-purple-text text-lighten-3">Crie uma conta!</Link>
                    </label>
                </Col>                        
            </Row>
        </form>
    );
};

export default LoginForm;