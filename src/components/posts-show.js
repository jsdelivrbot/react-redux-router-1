import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // provided by react router as param `id`
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    // const post = this.props.post;
    // console.log(post);

    return (
      <div>
        Posts Show
        {/* <p>{post.title}</p>
          <p>{post.categories}</p>
        <p>{post.content}</p> */}
      </div>
    );
  }
}

// use second argument, ownProps, the props for this component
// this.props === ownProps

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
