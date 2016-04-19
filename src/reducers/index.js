import { combineReducers } from 'redux';
import ShowReducer from './reducer_shows';
import SelectShow from './reducer_selected_show';

// every key provided to combineReducers, turns into a key in our global state
const rootReducer = combineReducers({
  shows: ShowReducer,
  selectedShow: SelectShow
});

export default rootReducer;
