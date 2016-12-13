import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux';

import dashboard from '../../modules/dashboard/reducers/';

const rootReducers = combineReducers({
    ...dashboard,
    routing: routerReducer
});

export default rootReducers;
