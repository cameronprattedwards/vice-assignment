import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {routes} from './routes';

const rootComponent = (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);

ReactDOM.render(rootComponent, document.getElementById('app'));
