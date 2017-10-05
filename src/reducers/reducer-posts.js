import _ from 'lodash';

import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';
import { DELETE_POST } from '../actions';
/*
  Default state is an empty object

  Need to take array of post records and make object with id props using
  lodash _.mapKeys()
*/

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      // use lodash.omit to delete post with id in payload from state
      return _.omit(state, action.payload);
    case FETCH_POST:
      // include all posts in current state object and add new key: value pair
      // for latest fetched post
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // ES6 concatinate key:value to existing state
      return { ...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      // use lodash.mapKeys to take each data object in array and 
      // create an object with name of 'id'
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
