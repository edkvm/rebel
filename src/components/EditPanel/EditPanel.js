import React, { Component } from 'react';

import { Popup, Button, Icon } from 'semantic-ui-react';


//import './styles/themes/rebel/semantic.less';

class EditPanel extends Component {
  render() {
    return (
      <div style={ { position: 'fixed', bottom: '10px', left: '10px', zIndex: '1000' } }>
        <Popup wide trigger={<Button circular icon={<Icon name='home' color='black'/>} color='red' />} on='click'>
          {this.props.children}
        </Popup>
      </div>
    );
  }
}

export default EditPanel;
