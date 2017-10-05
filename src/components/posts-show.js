import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

/*

*/

class PostsShow extends Component {
  componentDidMount() {
    // provided by react router as param `id`
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
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
