import React            from 'react';
import { map }          from 'lodash';
import { Route }        from 'react-router';

import routes           from './routes';

export default map(routes, (route, name) =>
    <Route key={ `route-${name}` } path={ route.route } component={ route.component } />
);
