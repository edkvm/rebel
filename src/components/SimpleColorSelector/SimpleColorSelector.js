import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import { Input, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';

import './simpleColorSelector.less';

class SimpleColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDialog: false,
      color: this.props.color
    };
  }
  
  handleClick = () => {
    this.setState({ displayDialog: !this.state.displayDialog })
  };

  handleClose = () => {
    this.setState({ displayDialog: false })
  };

  handleChange = (param, data) => {
    this.setState({ color: data.value })
    
    if(data.value.length == 7) {
      this.props.onValueChange(data.value);
    }
  }

  render() {
    const label = this.props.label;
    return (
        <div>
            <Input 
              label={ label }
              size='small'
              value={ `${this.state.color.toUpperCase()}` } 
              onChange={ this.handleChange } 
            /> 
        </div>
    )
  }
}

SimpleColorSelector.defaultProps = {
  color: '#005577',
  label: 'label',
  onValueChange: function(color) {
    console.log('[SimpleColorSelectro] No callback');
  }
}

SimpleColorSelector.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onValueChange: PropTypes.func
}

export default SimpleColorSelector