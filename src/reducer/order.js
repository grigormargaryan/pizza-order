import * as types from "../types";

const initialState = {
  order: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ORDER_REQUEST:
    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        order:[...state.order, payload]
      }
    default:
      return state;
  }
};
