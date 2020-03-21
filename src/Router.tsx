import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Nokia = React.lazy(() => import('./pages/Nokia'));
export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Nokia" component={Nokia} />
        </Suspense>
      </BrowserRouter>
    );
  }
}