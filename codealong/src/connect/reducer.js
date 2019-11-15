import { INCREASE_ICEBERGS, DECREASE_ICEBERGS } from './types';
const initialState = {
  count: 0,
};

const icebergReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_ICEBERGS: {
      // Never mutate state.
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    }
    case DECREASE_ICEBERGS: {
      // Never mutate state.
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    }
    default:
    return state;
  }
}

export default icebergReducer;