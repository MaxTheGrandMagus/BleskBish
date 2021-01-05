import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// import GlobalRouters from './globalRouters'
import App from './App'
ReactDOM.render(
<App/>,
 document.getElementById('root'));


serviceWorker.unregister();
