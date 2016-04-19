import { SELECTED_SHOW } from '../actions/index'

export default function(state=null, action) {

  switch (action.type) {
    case SELECTED_SHOW:
      return action.payload;
  }
  return state;
}
