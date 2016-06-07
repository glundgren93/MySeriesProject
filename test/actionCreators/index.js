import expect from 'expect';
import axios from 'axios';
import * as types from '../../src/constants';
import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to select a show', () => {
    const show = 'Lost';
    const expectedAction = {
      type: types.SELECTED_SHOW,
      payload: show
    };

    expect(actions.selectShow(show)).toEqual(expectedAction);
  });

  it('should create an action to fetch a show', () => {
    const show = 'Lost';
    const url = `${actions.ROOT_URL}&t=${show}`;
    const request = axios.get(url);

    const expectedAction = {
      type: types.FETCH_SHOWS,
      payload: request
    };

    expect(actions.fetchShows(show)).toEqual(expectedAction);
  });
})
