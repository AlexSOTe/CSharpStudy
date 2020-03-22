import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const HomeContainer = React.lazy(() => import('./containers/Home.container'));
const Nokia = React.lazy(() => import('./components/Nokia'));

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/Home" component={HomeContainer} />
          <Route exact path="/Nokia" component={Nokia} />
        </Suspense>
      </BrowserRouter>
    );
  }
}
