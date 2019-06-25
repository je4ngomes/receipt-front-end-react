import React from 'react';

const Login = (props) => {
    const { onChange, onSubmit, formData } = props;
    
    return (
        <div className="container" style={{ fontFamily: 'Arial' }}>
            <div className="row z-depth-1" style={{ width: '400px', background: '#fff' }}>
                <form className="col s12" onSubmit={onSubmit} style={{ padding: '20px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32pt' }}>Login</h2>

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
                        <label style={{ fontSize: '10pt' }}>
                            <a className="blue-text text-lighten-2" href="#">Esqueceu a senha?</a>
                        </label>
                    </div>

                    <div className="row">
                        <div className="col s5 offset-s2">
                            <button style={{ width: '15rem', height: '3rem' }} className="btn waves-effect waves-light blue" type="submit" name="action">
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;