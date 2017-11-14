import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { urls } from "urls";
import { PageNotFound } from './Main/components/pageNotFount';
import { Base } from './Main/components/index';
import { Todo } from './Todo/components/index';

export default (
  <Route component={Base}>
    <Route path={urls.index} component={Todo}/>
    <Route path='*' component={PageNotFound}/>
  </Route>
);