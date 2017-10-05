import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

/*

*/

class PostsShow extends Component {
  componentDidMount() {
    // if post is already fetched, just shown
    // if post has not been fetched, get it
    if (!this.props.post) {
      // provided by react router as param `id`
      const { id } = this.props.match.params;
      this.props.fetchPost(id);

    }
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>

        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

/*
  use second argument, ownProps, the props for this component
  this.props === ownProps

  post is undefined when application first loads
*/

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
