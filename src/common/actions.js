import { actionTypes } from "./actionTypes";

export const incrementCounter = (payload) => ({
  type: actionTypes.INCREMENT_COUNTER,
  payload,
});

export const decrementCounter = () => ({
  type: actionTypes.DECREMENT_COUNTER,
});
