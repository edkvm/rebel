import React, { Component } from 'react';

import HomepageLayout from './containers/stubapp/layout/HomepageLayout';
import ButtonEditPanel from './containers/editor/ButtonEditPanel/ButtonEditPanel';
import LessLoader from './containers/editor/LessLoader/LessLoader';

import EditPanel from './components/EditPanel/EditPanel'
//import './styles/themes/rebel/semantic.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LessLoader/>
        <EditPanel>
          <ButtonEditPanel/>
        </EditPanel>
        <HomepageLayout/>
      </div>
    );
  }
}

export default App;
