import { FETCH_SHOWS } from '../actions/index'

export default function(state = [], action) {
  
  // if an action with FETCH_SHOWS type is dispatched. we return
  // a concataned array containing state and the data from the payload.
  switch (action.type) {
    case FETCH_SHOWS:
      return [ action.payload.data, ...state ];
  }
  return state;
}
