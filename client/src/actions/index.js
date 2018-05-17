import axios from 'axios';
import { log } from 'util';

export const FETCH_USER = 'fetch_user';
export const HANDLE_TOKEN = 'handle_token';
export const FETCH_SURVEYS = 'fetch_surveys';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// updating credits in user model
export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: HANDLE_TOKEN, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: HANDLE_TOKEN, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
