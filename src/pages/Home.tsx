import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class Home extends Component {
  state = {
    text: 'Home'
  }

  render() {
    console.log(this);
    const { text } = this.state;
    return (
      <div>
        <Button variant="outlined" color="primary">Hello World</Button>
        {text}
      </div>
    );
  }
}