import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(thunk)));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

