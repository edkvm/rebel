import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


class ButtonThemer extends React.Component {
  // TODO: Split into individual components
  render() {
    const { colors } = this.props;
    return(<Helmet>
          <style type='text/css'>{`
            .ui.button {
              background-color: ${colors.default};
            }

            .ui.primary.button {
              background-color: ${colors.primary};
              color: #111111;
            }

            .ui.basic.button {
              background-color: ${colors.basic};
            }

            .ui.positive.button {
              background-color: ${colors.positive};
            }

            .ui.negative.button {
              background-color: ${colors.negative};
            }
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

