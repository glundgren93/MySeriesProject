import axios from 'axios';

export const ROOT_URL = 'http://www.omdbapi.com/?y=&plot=full&r=json&type=series';

export const FETCH_SHOWS = 'FETCH_SHOWS';
export const SELECTED_SHOW = 'SELECTED_SHOW';

// Makes request to OMDB API and returns object containing a type and the data returned
export const fetchShows = (show) => {
  const url = `${ROOT_URL}&t=${show}`;
  const request = axios.get(url);

  return {
    type: FETCH_SHOWS,
    payload: request
  };
}

export const selectShow = (show) => {
  return {
    type: SELECTED_SHOW,
    payload: show
  };
}
