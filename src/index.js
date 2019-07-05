import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import polarisReducer from './reducer';
import './index.css';
import App from './App';
import './styles/antd.css';

const store = createStore(polarisReducer);


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root'));
