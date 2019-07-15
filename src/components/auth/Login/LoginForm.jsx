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
        <div className="gradient_vicious_stance z-depth-1">
            <form onSubmit={onSubmit} style={{ padding: '20px', textAlign: 'center' }}>
                <h2 className="white-text" style={{ fontSize: '32pt' }}>Entrar</h2>

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
        </div>
    );
};

export default LoginForm;