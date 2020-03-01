import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import { Spinner } from '../components/ui/spinner';

const Dogs = lazy(() => import('../views/dogs/view-dogs'));
const NotFound = lazy(() => import('../views/not-found/view-not-found'));

export const Routes = () => (
  <Suspense fallback={<Spinner size='lg' />}>
    <Switch>
      <Route exact path="/" component={Dogs}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Suspense>
);
