import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const storeToProvider = createStore(rootReducer);

ReactDOM.render(
    <Provider store={storeToProvider}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
