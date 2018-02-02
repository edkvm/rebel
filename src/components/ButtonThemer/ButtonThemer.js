import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


class ButtonThemer extends React.Component {
  
  render() {
    const { colors } = this.props;
    return(<Helmet>
          <style>{`
            .ui.button {
              background-color: ${colors.default};
            };

            .ui.primary.button {
              background-color: ${colors.primary};
            };

            .ui.basic.button {
              background-color: ${colors.basic};
            };

            .ui.positive.button {
              background-color: ${colors.positive};
            };

            .ui.negative.button {
              background-color: ${colors.negative};
            };
          `}
          </style>
    </Helmet>
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

