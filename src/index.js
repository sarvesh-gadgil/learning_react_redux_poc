import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/ConfigStore'
import Routing from './router/Router'

// import addData from './action/Add';

// console.log(store.getState());

// console.log(store.dispatch(addData('test state string')));

// console.log(store.subscribe(() => console.log('Redux!!')))

// console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
