import React, { Component } from 'react';

import logo from './logo.svg';
import { Button, Segment, Container, Grid, GridColumn, Header, Popup, Icon } from 'semantic-ui-react';

import { SketchPicker } from 'react-color';

import ColorSelector from './components/ColorSelector/ColorSelector';
import ButtonThemer from './components/ButtonThemer/ButtonThemer';

import MainNavigation from './components/MainNavigation/MainNavigation';
import HomepageLayout from './layout/HomepageLayout';

import './styles/themes/rebel/semantic.less';




class App extends Component {
  state = {
    uiButton: { }
  }

  handleColorChange = (colorName, color) => {
    const uiButton = this.state.uiButton;
    uiButton[colorName] = color;
    
    this.setState({ uiButton });
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <div style={ { position: 'fixed', bottom: '100px', left: '10px', zIndex: '1000' } }>
        <Popup wide trigger={<Button circular icon='edit' color='red' />} on='click'>
          <Header as='h1'>Variables</Header>
          <ColorSelector 
            label='default'
            color={'#E8E8E8'} 
            onChange={ (color) => {
                this.handleColorChange('default', color);
              }
            }
          />
          <ColorSelector 
            label='primary'
            color={'#2185D0'} 
            onChange={ (color) => {
                this.handleColorChange('primary', color);
              }
            }
          />
          <ColorSelector
            label='positive'
            color={'#21BA45'} 
            onChange={ (color) => {
                this.handleColorChange('positive', color);
              }
            }
          />
          <ColorSelector
            label='negative'
            color={'#DB2828'} 
            onChange={ (color) => {
                this.handleColorChange('negative', color);
              }
            }
          />
        </Popup>
        </div>
        <ButtonThemer colors={this.state.uiButton} />
        <HomepageLayout/>
      </div>
    );
  }
}

export default App;
