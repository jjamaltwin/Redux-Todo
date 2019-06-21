import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import todoApp from './reducers/index';

const store = createStore(todoApp)

render(
<Provider store={store}>
    <App />
</Provider>,

document.getElementById('root'));


