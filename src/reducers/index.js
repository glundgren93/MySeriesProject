import { combineReducers } from 'redux';
import ShowReducer from './reducer_shows';

// every key provided to combineReducers, turns into a key in our global state
const rootReducer = combineReducers({
  shows: ShowReducer
});

export default rootReducer;
