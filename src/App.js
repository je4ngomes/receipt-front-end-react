import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/css/App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/auth/login' component={LoginPage}/>
                    <Route path='/auth/register' component={RegisterPage}/>
                    <Route path='/dashboard' component={DashboardPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
