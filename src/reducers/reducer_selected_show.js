import * as types from '../constants';

export default function(state = null, action) {

  switch (action.type) {
    case types.SELECTED_SHOW:
      return action.payload;
  }
  return state;
}
