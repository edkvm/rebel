import React, { Component } from 'react';

import { Button,  Header, Popup, Icon , Container, Grid } from 'semantic-ui-react';

import HomepageLayout from './containers/stubapp/layout/HomepageLayout';

import ColorSelector from './containers/editor/ColorSelector/ColorSelector';
import SimpleColorSelector from './containers/editor/SimpleColorSelector/SimpleColorSelector';
import ButtonThemer from './containers/editor/ButtonThemer/ButtonThemer';
import LessLoader from './containers/editor/LessLoader/LessLoader';

//import './styles/themes/rebel/semantic.less';

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
    return (
      <div className="App">
        <div style={ { position: 'fixed', bottom: '10px', left: '10px', zIndex: '1000' } }>
        <Popup wide trigger={<Button circular icon={<Icon name='home' color='black'/>} color='red' />} on='click'>
          <Header as='h1'>Edit</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <SimpleColorSelector 
                  label='default'
                  color={'#E8E8E8'} 
                  onValueChange={ (color) => {
                      this.handleColorChange('default', color);
                    }
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <SimpleColorSelector 
                  label='primary'
                  color={'#2185D0'} 
                  onValueChange={ (color) => {
                      this.handleColorChange('primary', color);
                    }
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <SimpleColorSelector
                  label='positive'
                  color={'#21BA45'} 
                  onValueChange={ (color) => {
                      this.handleColorChange('positive', color);
                    }
                  }
                />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <SimpleColorSelector
                  label='negative'
                  color={'#DB2828'} 
                  onValueChange={ (color) => {
                      this.handleColorChange('negative', color);
                    }
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>    
          
          
          
          
        </Popup>
        </div>
        <LessLoader colors={this.state.uiButton} />
        <ButtonThemer colors={this.state.uiButton} />
        <HomepageLayout/>
      </div>
    );
  }
}

export default App;
