import expect from 'expect'
import reducer from '../../src/reducers/reducer_selected_show';
import * as types from '../../src/constants'

describe('selected show reducer', () => {

  it('should handle SELECTED_SHOW', () => {
    const show = 'Lost';

    expect(reducer([], {
      type: types.SELECTED_SHOW,
      payload: show
    })).toEqual(show)
  });
})
