import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import Notes from './components/Notes';
import Settings from './components/Settings';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Notes} />
    <Route path="notes" component={Notes} />
    <Route path="settings" component={Settings} />
  </Route>
);

