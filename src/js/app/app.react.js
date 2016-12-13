import React                from 'react';
import ReactDOM             from 'react-dom';
import store, { history }   from './config/store';

import routes               from '../engine/routes.react';
import AppContainer         from './app-container.react';

ReactDOM.render(
    <AppContainer store={ store } history={ history } routes={ routes } />,
    document.getElementById('root')
);
