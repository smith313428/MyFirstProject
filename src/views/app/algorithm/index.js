import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Algorithm = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './algorithm')
);

const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        render={props => <Algorithm {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
