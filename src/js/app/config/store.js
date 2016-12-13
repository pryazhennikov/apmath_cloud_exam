import { createStore, applyMiddleware }     from 'redux';
import { syncHistoryWithStore }             from 'react-router-redux';
import { browserHistory }                   from 'react-router';
import thunk                                from 'redux-thunk';

import rootReducer                          from './reducers';

const defaultState = {
    allChartData: {
        data: [],
        fetching: true
    }
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
