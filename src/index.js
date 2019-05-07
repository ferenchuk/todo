import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './containers/App';
import './styles/main.scss';

const persistedState = localStorage.getItem('todoApp') ? JSON.parse(localStorage.getItem('todoApp')) : {}
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    localStorage.setItem('todoApp', JSON.stringify(store.getState()))
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
