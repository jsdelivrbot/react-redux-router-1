import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/*
   connect Field object passed in by default by redux form Field component
   use `...field.input` to get all the different properties of input and
   pass to Field
*/

class PostsNew extends Component {
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
          label="Tags"
          name="tags"
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

// reduxForm takes a configuration object as its argument:
//  - `form` with a unique string

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
