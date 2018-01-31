import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react'

class ToggleColor extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    let current = this.state.isToggled ? 'ON' : 'OFF';
    
    return (
      <Button onClick={this.handleClick}>Switch {`${current}`}</Button>  
    );
  }
}

export default ToggleColor;