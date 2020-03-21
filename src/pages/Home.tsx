import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class Home extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary">Hello World</Button>
      </div>
    );
  }
}