import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { HomeState } from '../types/AppState';
// 当前页面的状态数据结构
export interface IProps {
  homeState: HomeState;
  SetName: (name: string) => void;
};

class Home extends Component<IProps> {
  onClick() {
    const { SetName } = this.props;
    SetName('alex');
    console.log(this.props);
  }
  render() {
    const { id, name } = this.props.homeState;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={() => this.onClick()}>Hello World</Button>
        <div>{name}</div>
        <div>{id}</div>
      </div>
    );
  }
}
export default Home;
