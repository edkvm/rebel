import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import logo from './logo.svg';
import { Button, Segment } from 'semantic-ui-react';

import { SketchPicker } from 'react-color';

import ToggleColor from './components/ToggleColor';
import ColorPicker from './components/ColorPicker/ColorPicker';

import './themes/rebel/semantic.less';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Your title!</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <style>{`
            .ui.button {
              background: red;
            };
          `}
          </style>
        </Helmet>
        <Segment attached="bottom"> 
          <Button>Primary</Button>
          <Button color='red'>Danger</Button>
        </Segment>
        <ToggleColor />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
