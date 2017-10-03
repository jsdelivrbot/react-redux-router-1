import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// include to handle promises from AJAX calls
import promise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';

// app already set up to handle middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*
  BrowserRouter can only have one child element, so multiple routes need to be wrapped in a <div>.

  <Route> components have two parameters: path ('/hello') and component ({ Hello })

  Using BrowserRouter, application no longer uses <App /> as its root component

  Using Switch keeps all paths that match path loosely from rendering (`/`)
  Most specific routes (`/posts/new`) should appear earlier in switch
*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
