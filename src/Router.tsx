import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// �˴�����ʹ��React.lazy����Ϊindex.tsxʹ����Suspense���
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
