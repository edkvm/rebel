import React, { Component } from 'react';

import logo from './logo.svg';
import { Button, Segment, Container, Grid, GridColumn, Header } from 'semantic-ui-react';

import { SketchPicker } from 'react-color';

import ColorSelector from './components/ColorSelector/ColorSelector';
import ButtonThemer from './components/ButtonThemer/ButtonThemer';

import MainNavigation from './components/MainNavigation/MainNavigation';
import './themes/rebel/semantic.less';


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
        <ButtonThemer colors={this.state.uiButton} />
        <MainNavigation />
        <Container style={{ paddingTop: '10px'}}>
          <Header as='h1'>Buttons</Header> 
          <Grid>
            <Grid.Row>
              <Segment color='grey' style={{ width: '100%' }}>
                <Button >Default</Button>
                <Button primary>Primary</Button>
                <Button basic>Basic</Button>
                <Button positive>Success</Button>
                <Button negative>Danger</Button>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Segment attached="bottom">   
                <Grid columns={4}>
                  <Grid.Row>
                    <Grid.Column>
                      <ColorSelector 
                        label='default'
                        color={'#E8E8E8'} 
                        onChange={ (color) => {
                            this.handleColorChange('default', color);
                          }
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <ColorSelector 
                        label='primary'
                        color={'#2185D0'} 
                        onChange={ (color) => {
                            this.handleColorChange('primary', color);
                          }
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <ColorSelector
                        label='positive'
                        color={'#21BA45'} 
                        onChange={ (color) => {
                            this.handleColorChange('positive', color);
                          }
                        }
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <ColorSelector
                        label='negative'
                        color={'#DB2828'} 
                        onChange={ (color) => {
                            this.handleColorChange('negative', color);
                          }
                        }
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Row>
          </Grid>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
