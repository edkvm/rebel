import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

//import less from 'less'

class ButtonThemer extends React.Component {
  // TODO: Split into individual components
  componentDidUpdate(prevProps, prevState) {
    const { colors } = this.props;
    let modifyVarsCmd = {
      '@backgroundColor': colors.default
    };
    window.less.modifyVars(modifyVarsCmd);
  }
  
  updateTheme() {

  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

ButtonThemer.defaultProps = {
  colors: {}
}

ButtonThemer.propTypes = {
  colors: PropTypes.object
}

export default ButtonThemer;

