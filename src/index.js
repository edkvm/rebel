import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'less/dist/less.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

