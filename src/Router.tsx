import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const HomeContainer = React.lazy(() => import('./Containers/Home.Container'));

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/Home" component={HomeContainer} />
        </Suspense>
      </BrowserRouter>
    );
  }
}
