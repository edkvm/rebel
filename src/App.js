import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'
import './themes/rebel/semantic.less';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Primary</Button>
      </div>
    );
  }
}

export default App;
