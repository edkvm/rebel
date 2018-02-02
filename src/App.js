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
    uiButton:{ 
      color: '#AC25AC' 
    }
  }
  render() {
    return (
      <div className="App">
        <MainNavigation />
        <ButtonThemer color={this.state.uiButton.color}/>
        <Container>
          <Header as='h1'>First Header</Header> 
          <Grid>
            <Grid.Row>
              <Segment color='grey' style={{ width: '100%' }}>
                <Button default>Default</Button>
                <Button primary>Primary</Button>
                <Button basic>Basic</Button>
                <Button positive>Success</Button>
                <Button negative>Danger</Button>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Segment attached="bottom">   
                <ColorSelector 
                  color={'#AC25AC'} 
                  onChange={ (color) => {
                      this.setState({ uiButton: { color: color }}); 
                    }
                  }
                  />
                <ColorSelector 
                  color={'#AC25AC'} 
                  onChange={ (color) => {
                      this.setState({ uiButton: { color: color }}); 
                    }
                  }
                  />
              </Segment>
            </Grid.Row>
          </Grid>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
