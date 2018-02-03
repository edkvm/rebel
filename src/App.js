import React, { Component } from 'react';

import { Button,  Header, Popup, Icon , Grid } from 'semantic-ui-react';


import ColorSelector from './containers/editor/ColorSelector/ColorSelector';
import ButtonThemer from './containers/editor/ButtonThemer/ButtonThemer';

import HomepageLayout from './containers/stubapp/layout/HomepageLayout';

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
        <div style={ { position: 'fixed', bottom: '10px', left: '10px', zIndex: '1000' } }>
        <Popup wide trigger={<Button circular icon={<Icon name='home' color='black'/>} color='red' />} on='click'>
          <Header as='h1'>Edit</Header>
          <Grid>
            <Grid.Row>
              <ColorSelector 
              label='default'
              color={'#E8E8E8'} 
              onChange={ (color) => {
                  this.handleColorChange('default', color);
                }
              }
            />
            </Grid.Row>
            <Grid.Row>
              <ColorSelector 
              label='primary'
              color={'#2185D0'} 
              onChange={ (color) => {
                  this.handleColorChange('primary', color);
                }
              }
            />
            </Grid.Row>
            <Grid.Row>
              <ColorSelector
              label='positive'
              color={'#21BA45'} 
              onChange={ (color) => {
                  this.handleColorChange('positive', color);
                }
              }
            />
            </Grid.Row>
            <Grid.Row>
              <ColorSelector
              label='negative'
              color={'#DB2828'} 
              onChange={ (color) => {
                  this.handleColorChange('negative', color);
                }
              }
            />
            </Grid.Row>
          </Grid>    
          
          
          
          
        </Popup>
        </div>
        <ButtonThemer colors={this.state.uiButton} />
        <HomepageLayout/>
      </div>
    );
  }
}

export default App;
