import { combineReducers } from 'redux';
// import reducer from redux form and give a form-specific name
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer-posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
