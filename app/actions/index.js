import axios from 'axios';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';

// TODO правильный ROOT_URL прописать
const ROOT_URL = 'http://localhost:8080/api';
const API_KEY = '?key=kfuidbinefavxv';

export function fetchCollections() {
  const request = axios.get(`${ROOT_URL}/collections${API_KEY}`);

  return {
    type: FETCH_COLLECTIONS,
    payload: request
  };
}

export function createCollection(props) {
  const request = axios.post(`${ROOT_URL}/collections/create${API_KEY}`, props);

  return {
    type: CREATE_COLLECTION,
    payload: request
  }
}
