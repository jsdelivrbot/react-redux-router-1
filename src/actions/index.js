// import axios to handle AJAX calls
import axios from 'axios';

// define constants for event types
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

// define constants for AJAX calls
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=s9k93K32K09xl1jfh8';

/*
  fetchPosts() gets the list of all post objects
  - redux promise middleware will resolve request into payload when
    action is called
  - payload returns all post objects as id:post name-value pairs
*/

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

/*
  fetchPost(id): make get AJAX request to /posts/:id
  - return a payload with the post data object
*/

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

/*
  createPost() action creator
  - receives values object { title, categories, content }
  - make request using axios
  - return object with action type and request as payload
  - request returns data for post with 'id' added

  The callback function is used to navigate to index after post is created
*/

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

/*
  deletePost(id, callback): make delete AJAX request to /posts/:id
  - return id of post being deleted to be passed to reducer to delete
    post from state
  - include callback for navigation after successful delete
*/

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
