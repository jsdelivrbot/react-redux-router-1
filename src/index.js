import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

// app already set up to handle middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

/*
  Test components for routes
*/

class Hello extends React.Component {
  render() { return <div>Hello!</div> };
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div> };
}

/*
  BrowserRouter can only have one child element, so multiple routes need to be wrapped in a <div>.
  <Route> components have two parameters: path ('/hello') and component ({ Hello })
*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>Header on All Routes</h1>
        <Route path="/hello" component={ Hello } />
        <Route path="/goodbye" component={ Goodbye } />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
