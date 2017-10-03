import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  render() {
    return(
      <div>
        Posts Index
      </div>
    );
  }
}

// Since action is being called directly without requiring custom data
// manipulation, use connect action creator directly instead of using
// mapDispatchToProps

export default connect(null, { fetchPosts }) (PostsIndex);
