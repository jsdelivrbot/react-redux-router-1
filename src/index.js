import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// include to handle promises from AJAX calls
import promise from 'redux-promise';

// include router, route, and switch components from react-router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import reducers
import reducers from './reducers';

// import custom components
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

// app already set up to handle middleware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/*
  BrowserRouter can only have one child element, so multiple routes need
    to be wrapped in a <div>.

  <Route> components have two parameters: path ('/hello') and
    component ({ Hello })

  Using BrowserRouter, the application no longer uses <App /> as
    its root component

  Using Switch keeps all paths that match path loosely from rendering (`/`)
  - the most specific routes (`/posts/new`) should appear earlier in switch
*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
