import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "../../layout/AppLayout";

const Algorithm = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ "./algorithm")
);

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/algorithm`}
              />
              <Route
                path={`${match.url}/algorithm`}
                render={(props) => <Algorithm {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
