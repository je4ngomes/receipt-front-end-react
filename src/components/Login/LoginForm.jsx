import React from 'react';
import '../../App.css';


const LoginForm = (props) => {
    const { onChange, onSubmit, formData } = props;
    
    return (
        <div className="container" style={{ fontFamily: 'Arial' }}>
            <div className="row z-depth-1 gradient__login" style={{ width: '400px' }}>
                <form className="col s12" onSubmit={onSubmit} style={{ padding: '20px', textAlign: 'center' }}>
                    <h2 className="white-text" style={{ fontSize: '32pt' }}>Login</h2>

                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input onChange={onChange} id="username" value={formData.username} name="username" type="text" className="validate" />
                            <label htmlFor="username">Usuário</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input onChange={onChange} id="password" value={formData.password} name="password" type="password" className="validate" />
                            <label htmlFor="password">Senha</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <label>
                                <input onChange={onChange} name="rememberMe" type="checkbox" className="filled-in" checked={formData.rememberMe}/>
                                <span>Lembrar de mim</span>
                            </label>
                        </div>
                        <div className="col s6">
                            <label style={{ fontSize: '11pt' }}>
                                <a className="pink-text text-accent-2" href="#">Esqueceu a senha?</a>
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button style={{ width: '16rem', height: '3rem' }} className="btn waves-effect waves-light pink" type="submit" name="action">
                                Entrar
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <label style={{ fontSize: '11pt' }}>
                                Ou <a className="pink-text text-accent-2" href="#">Crie uma conta!</a>
                            </label>
                        </div>                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;