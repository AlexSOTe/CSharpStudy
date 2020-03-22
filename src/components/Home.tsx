import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { SetName } from '../store/Actions';
import { HomeState } from '../types/AppState';
import { Dispatch } from 'redux';

export interface IProps {
  dispatch: Dispatch;
  Home: HomeState;
  SetName: (name: string) => void;
};

class Home extends Component<IProps> {
  render() {
    console.log('11', this.props)
    const { dispatch, Home } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={() => dispatch(SetName('alex'))}>Hello World</Button>
        <div>{Home.id}</div>
      </div>
    );
  }
}
export default Home;
