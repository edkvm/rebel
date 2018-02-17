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
        },
        {
            type: 'elements',
            name: 'segment'
        },
        {
            type: 'collections',
            name: 'grid'
        },
        {
            type: 'collections',
            name: 'menu'
        }
    ];

    return(
        <Helmet>
            {elements.map((el, idx) => (
            <link rel="stylesheet/less" type="text/css" href={`${baseUrl}/${el.type}/${el.name}.less`} key={idx}/>
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

