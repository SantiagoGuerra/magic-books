import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import App from './components/App';
import booksReducer from './reducers/books';
import filterReducer from './reducers/filter';

const store = createStore(combineReducers({ books: booksReducer, filter: filterReducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
