import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayDialog: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayDialog: !this.state.displayDialog })
  };

  handleClose = () => {
    this.setState({ displayDialog: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    const styles = reactCSS({
      'default': {
        colorHolder: {
          width: '15px',
          height: '15px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          cursor: 'pointer',
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

    return (
      <div>
        <div style={ styles.colorHolder } onClick={ this.handleClick }/>
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

export default ColorPicker