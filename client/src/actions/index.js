import axios from 'axios';
import { log } from 'util';

export const FETCH_USER = 'fetch_user';
export const HANDLE_TOKEN = 'handle_token';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// updating credits in user model
export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: HANDLE_TOKEN, payload: res.data });
};
