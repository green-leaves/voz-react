import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, HashRouter} from 'react-router-dom'
import App from './containers/App.js'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome-webpack';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
