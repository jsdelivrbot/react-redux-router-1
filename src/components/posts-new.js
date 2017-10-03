import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/*
   connect Field object passed in by default by redux form Field component
   use `...field.input` to get all the different properties of input and
   pass to Field
*/
class PostsNew extends Component {
  renderTitleField(field) {
    return(
      <div>
        <input
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
          name="title"
          component={this.renderTitleField}
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
