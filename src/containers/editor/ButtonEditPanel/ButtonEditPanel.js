import React from 'react';
import PropTypes from 'prop-types';

import { Button,  Header, Popup, Icon , Container, Grid } from 'semantic-ui-react';
import SimpleColorSelector from '../../../components/SimpleColorSelector/SimpleColorSelector';

class ButtonEditPanel extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      themeColors: props.themeColors
    };
  }
  updateTheme(colors) {
    let modifyVarsCmd = {
      '@backgroundColor': colors.default,
      '@primaryColor': colors.primary,
      '@positiveColor': colors.positive,
      '@negativeColor': colors.negative
    };
    window.less.modifyVars(modifyVarsCmd);
  }

  handleColorChange = (colorName, color) => {
    const themeColors = this.state.themeColors;
    themeColors[colorName] = color;
    this.setState({ themeColors });
    this.updateTheme(themeColors);
  }

  render() {
    const { themeColors } = this.state;
    return(
      <div>  
        <Header as='h1'>Button Edit</Header>
        <Grid>
          { 
            Object.keys(themeColors).map((key) => (
              <Grid.Row key={key}>
                <Grid.Column>
                  <SimpleColorSelector 
                    label={key}
                    color={themeColors[key]} 
                    onValueChange={ (color) => {
                        this.handleColorChange(key, color);
                      }
                    }
                  />
                </Grid.Column>
              </Grid.Row>
            ))
          }
        </Grid>    
      </div>
    )
  }
}

ButtonEditPanel.defaultProps = {
  themeColors: {
    'default': '#E8E8E8',
    'primary': '#2185D0',
    'positive': '#21BA45',
    'negative': '#DB2828'
  }
}

ButtonEditPanel.propTypes = {
  themeColors: PropTypes.object
}

export default ButtonEditPanel;

