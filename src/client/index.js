import React from 'react';
import App from '../pages/App';
import ReactDOM from 'react-dom';

const render = ()=>{
    return <App/>
}

ReactDOM.hydrate(render(),document.getElementById('root'));