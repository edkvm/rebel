import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import { Input, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';


class ColorSelector extends React.Component {
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

  handleChange = (color) => {
    this.setState({ color: color.hex })
    this.props.onChange(color.hex);
  }

  render() {
    console.log()
    const styles = reactCSS({
      'default': {
        colorHolder: {
          width: '30px',
          background: `${ this.state.color }`,
          cursor: 'pointer',
          borderRadius: '0 3px 3px 0'
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px', 
          bottom: '0px',
          left: '0px',
        },
      }
    });

    const label = this.props.label;
    return (
      <div>
        <Input 
          label={ label }
          size='tiny'
          value={ `${this.state.color.toUpperCase()}` } 
          action={<div style={ styles.colorHolder } onClick={ this.handleClick } /> }
        />
        { this.state.displayDialog ? 
          <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose } />
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
          </div>
          : null }
      </div>
    )
  }
}

ColorSelector.defaultProps = {
  color: '#005577',
  label: 'label',
  onChange: function(color) {
    console.log(`ChangedTo: ${color}`);
  }
}

ColorSelector.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default ColorSelector