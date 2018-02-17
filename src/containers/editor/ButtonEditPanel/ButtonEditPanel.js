import React from 'react';
import PropTypes from 'prop-types';

import { Button,  Header, Popup, Icon , Container, Grid } from 'semantic-ui-react';
import SimpleColorSelector from '../../../components/SimpleColorSelector/SimpleColorSelector';

class ButtonEditPanel extends React.Component {
  state = {
    uiButton: { }
  }
  
  updateTheme(colors) {
    let modifyVarsCmd = {
      '@backgroundColor': colors.default
    };
    window.less.modifyVars(modifyVarsCmd);
  }

  handleColorChange = (colorName, color) => {
    const uiButton = this.state.uiButton;
    uiButton[colorName] = color;
    this.setState({ uiButton });
    this.updateTheme(uiButton);
  }

  render() {
    return(
      <div>  
        <Header as='h1'>Button Edit</Header>
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
      </div>
    )
  }
}

ButtonEditPanel.defaultProps = {
  colors: {}
}

ButtonEditPanel.propTypes = {
  colors: PropTypes.object
}

export default ButtonEditPanel;

