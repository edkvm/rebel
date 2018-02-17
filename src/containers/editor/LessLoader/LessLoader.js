import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


class LessLoader extends React.Component {
  // TODO: Split into individual components
  render() {
    const { colors } = this.props;
    let baseUrl = "/static/style/less/_factory/semantic-ui/definitions";
    let elements = [
        {
            type: 'elements',
            name: 'button'
        }
    ];

    return(
        <Helmet>
            {elements.map((el, _) => (
            <link rel="stylesheet/less" type="text/css" href={`${baseUrl}/${el.type}/${el.name}.less`} />
            ))}
            
            <script src="/static/js/less.js" type="text/javascript"></script>
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

