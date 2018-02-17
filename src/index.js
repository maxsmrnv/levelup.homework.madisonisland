import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux'
import reducers from './reducers'


stre = createStore(combineReducers(reducers));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


