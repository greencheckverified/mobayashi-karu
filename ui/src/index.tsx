// fx
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// app
import View from './views';

ReactDOM.render(<View />, document.getElementById('root'));

serviceWorker.unregister();
