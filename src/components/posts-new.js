import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return(
      <form>
        <Field
          name="title"
          component={}
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
