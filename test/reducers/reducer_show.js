import expect from 'expect'
import reducer from '../../src/reducers/reducer_shows';
import * as types from '../../src/constants'

describe('shows reducer', () => {

    it('should handle FETCH_SHOWS', () => {
        const show = {
            data: 'Lost'
        };

        expect(reducer([], {
            type: types.FETCH_SHOWS,
            payload: show
        })).toEqual(show.data)
    });
})
