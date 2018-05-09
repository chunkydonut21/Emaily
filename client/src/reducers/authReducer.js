import { FETCH_USER, HANDLE_TOKEN } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case HANDLE_TOKEN:
      return action.payload || false;
    default:
      return state;
  }
}

// null, user_data, false

// null -> nothing show
// user_data -> show logout menu
// false -> show Login menu
