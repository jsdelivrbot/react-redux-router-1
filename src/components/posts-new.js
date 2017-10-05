import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

/*
   connect Field object passed in by default by redux form Field component
   use `...field.input` to get all the different properties of input and
   pass to Field
*/

class PostsNew extends Component {
  // render label and input for <Field> component
  renderField(field) {
    // get meta values for touched and error from field.meta object
    const { meta: { touched, error } } = field;
    // define className based on values in field.meta touched and error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {/* only show field.meta.error after user has touched field */}
        <small className="text-help">
          {touched ? error : ''}
        </small>
      </div>
    );
  }

  // form's onSubmit action
  // passes values to createPost action creator
  onSubmit(values) {
    // update route history and navigate to root path
    // only after post has been created by passing callback function to
    // createPost
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // Redux form is wired up to this form using ReduxForm helper below
    // props are passed when ReduxForm processes form
    const { handleSubmit } = this.props;

    return(
      // define onSubmit as callback with proper `this` binding
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

/*
  validation helper function
  - values is the values the user has entered into the form

  values -> {
    title: "title",
    categories: "category, category",
    content: "content string"
  }
*/

function validate(values) {
  // return empty object if no errors
  const errors = {};

  if (!values.title ) {
    errors.title = "Enter a title for your post.";
  }

  if (!values.categories) {
    errors.categories = "Enter categories for your post.";
  }

  if (!values.content) {
    errors.content = "Enter content for your new post.";
  }

  // if errors is an empty object, there are no issues with validation
  // if errors has ANY properties, redux form assumes form is invalid
  return errors;
}

/*
  reduxForm takes a configuration object as its argument:
   - 'validate' is the declared validate() function
   - `form` with a unique string as ID

  connect is added inside second set of parens for reduxForm helper
*/

export default reduxForm({
  validate, // key and value are the same
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
