import _ from 'lodash';
import React, { Component } from 'react';

// imports to bind action to this component
import { connect } from 'react-redux';

// import Link component from react
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

/*
  Index API call gets back a list of post objects with properties.

  Storing posts in a `posts` object using ids as keys with data objects as values:

  {
    4:  { title: "Hello", id: 4, content: "Hi", tags: "greetings" }.
    12: { title: "Bye", id: 12, content: "Bye", tags: "greetings" }.
  }

  An individual post can then be referred to by id as:

    state.posts[postId]
*/

class PostsIndex extends Component {
  // when component is about to be shown on screen, make call to API using
  // action creator using lifecycle methods

  componentDidMount() {
    // when component shows up in DOM, kick off data loading process
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )
    });
  }

/*
  Use React <Link /> component with "to" property indicating destination route
*/

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// Since action is being called directly without requiring custom data
// manipulation, use connect action creator directly instead of using
// mapDispatchToProps

export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);
