import * as types from "../types";


export const addOrderRequest = data => ({
  type: types.ADD_ORDER_REQUEST,
  payload: data
});
