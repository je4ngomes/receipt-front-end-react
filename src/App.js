import React from 'react';

import { useAxios } from './hooks/useAxios';

// import './assets/css/App.css';
// import Authentication from './components/authentication/Authentication';
// import Sidebar from './components/dashboard/Sidebar/Sidebar';

function App() {
    const { data, isLoading } = useAxios('http://numbersapi.com/random/trivia');

    return (
        <div className="App">
            <p  className='white-text'>{isLoading ? 'loading...' : data}</p>
        </div>
    );
}

export default App;
