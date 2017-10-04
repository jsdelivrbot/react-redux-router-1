import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/*
   connect Field object passed in by default by redux form Field component
   use `...field.input` to get all the different properties of input and
   pass to Field
*/

class PostsNew extends Component {
  // render label and input for <Field> component
  renderField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <form>
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

  // validate inputs from 'values'
  if (values.title.length < 3) {
    errors.title = "Enter a title for your post that is at least 3 characters.";
  }

  if (!values.title ) {
    errors.title = "Enter a title for your post.";
  }

  if (!values.categories) {
    errors.title = "Enter categories for your post.";
  }

  if (!values.content) {
    errors.title = "Enter content for yoru new post.";
  }

  // if errors is an empty object, there are no issues with validation
  // if errors has ANY properties, redux form assumes form is invalid
  return errors;
}

/*
  reduxForm takes a configuration object as its argument:
   - 'validate' is the declared validate() function
   - `form` with a unique string as ID
*/

export default reduxForm({
  validate, // key and value are the same
  form: 'PostsNewForm'
})(PostsNew);
