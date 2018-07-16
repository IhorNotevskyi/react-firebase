import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import './firebase.js';

import App from './App';
import EditFormPage from './EditFormPage';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/:id" component={EditFormPage} />
		</div>
	</Router>	
);


ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
