import React from 'react';
import {Route} from 'react-router';
import {Root} from './components/Root';

const routes = (
  <div>
    <Route exact={true} path="/" component={Root} />
  </div>
);

export {routes};
