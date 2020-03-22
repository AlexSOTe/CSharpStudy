import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// 此处可以使用React.lazy，因为index.tsx使用了Suspense组件
const HomeContainer = React.lazy(() => import('./Containers/Home.Container'));

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/Home" component={HomeContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
