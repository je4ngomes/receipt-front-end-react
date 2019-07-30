import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/css/App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FinancialManagementPage from './pages/FinancialManagementPage';
import CategoryManagementPage from './pages/CategoryManagementPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/auth/login' component={LoginPage}/>
                    <Route path='/auth/register' component={RegisterPage}/>
                    <Route exact path='/dashboard' component={DashboardPage}/>
                    <Route path='/dashboard/finance' component={FinancialManagementPage}/>
                    <Route path='/dashboard/category' component={CategoryManagementPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
