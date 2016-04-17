import axios from 'axios';

const ROOT_URL = 'http://www.omdbapi.com/?y=&plot=full&r=json&type=series';

export const FETCH_SHOWS = 'FETCH_SHOWS';

// Makes request to OMDB API and returns object containing a type and the data returned
export function fetchShows(show) {
  const url = `${ROOT_URL}&t=${show}`;
  const request = axios.get(url);

  return {
    type: FETCH_SHOWS,
    payload: request
  };
}
