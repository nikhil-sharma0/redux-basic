import { actionTypes } from "./actionTypes";

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER: {
      //   let count = state.count;
      let value = action.payload;
      return {
        count: value,
      };
    }
    case actionTypes.DECREMENT_COUNTER: {
      let count = state.count;
      return {
        count: --count,
      };
    }
    default: {
      return state;
    }
  }
}
