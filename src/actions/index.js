import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=s9k93K32K09xl1jfh8';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  // redux promise middleware will resolve request into payload when action is called
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
