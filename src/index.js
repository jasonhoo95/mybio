import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Roster from './Roster';
import Work from './work';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
	<BrowserRouter>
	<Switch>
  <Route exact path='/' component={App}/>
  <Route path='/roster/:id' name="archives"   component={Roster}/>
  <Route path='/work'  component={Work}/>
</Switch>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
