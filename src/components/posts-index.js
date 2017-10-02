import React, { Component } from 'react';

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
  render() {
    return(
      <div>
        Posts Index
      </div>
    );
  }
}

export default PostsIndex;
