import axios from 'axios';
import * as types from '../constants';
export const ROOT_URL = 'http://www.omdbapi.com/?y=&plot=full&r=json&type=series';

// Makes request to OMDB API and returns object containing a type and the data returned
export const fetchShows = (show) => {
  const url = `${ROOT_URL}&t=${show}`;
  const request = axios.get(url);

  return {
    type: types.FETCH_SHOWS,
    payload: request
  };
}

export const selectShow = (show) => ({
    type: types.SELECTED_SHOW,
    payload: show
})
