import * as types from '../constants';

export default function(state = [], action) {

  // if an action with FETCH_SHOWS type is dispatched. we return
  // a concataned array containing state and the data from the payload.
  switch (action.type) {
    case types.FETCH_SHOWS:
      return [ action.payload.data, ...state ];
  }
  return state;
}
