import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// include to handle promises from AJAX calls
import promise from 'redux-promise';

import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts-index';

// app already set up to handle middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*
  Test components for routes
*/

// class HelloComponent extends React.Component {
//   render() { return <div>Hello!</div> };
// }
//
// class GoodbyeComponent extends React.Component {
//   render() { return <div>Goodbye!</div> };
// }

/*
  BrowserRouter can only have one child element, so multiple routes need to be wrapped in a <div>.
  <Route> components have two parameters: path ('/hello') and component ({ Hello })

  Using BrowserRouter, application no longer uses <App /> as its root component
*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container">
        {/* <h1>React Router</h1> */}
        {/* <Route path="/hello" component={ HelloComponent } /> */}
        {/* <Route path="/goodbye" component={ GoodbyeComponent } /> */}
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
