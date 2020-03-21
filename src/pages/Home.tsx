import React, { Component, Props } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from '@material-ui/core';
import { SetName } from '../store/Actions';
import { HomeState } from '../Models/AppState';
import { mapStateToProps } from '../store/Store';

class Home extends Component<Props<ConnectedProps<HomeState>>> {
  //constructor() {
  //  super(props);
  //}
  GetName() {
    // @ts-ignore
    console.log(this.props.dispatch(SetName("123")));
    console.log(this.props.dispatch(SetName("123")));
  }
  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={() => this.GetName()}>Hello World</Button>
        <div>{}</div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Home);
