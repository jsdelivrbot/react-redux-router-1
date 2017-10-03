import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

/*
  Default state is an empty object

  Need to take array of post records and make object with id props using
  lodash _.mapKeys()
*/

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
