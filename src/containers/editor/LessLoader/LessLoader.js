import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


class LessLoader extends React.Component {
  // TODO: Split into individual components
  render() {
    const { colors } = this.props;
    return(<Helmet>
          
    </Helmet>
    )
  }
}

LessLoader.defaultProps = {
  colors: {}
}

LessLoader.propTypes = {
  colors: PropTypes.object
}

export default LessLoader;

