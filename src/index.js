import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'

// const store = createStore(combineReducers(reducers));



const store = createStore(
    combineReducers(reducers), /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();


console.log(store.getState().CartItems);