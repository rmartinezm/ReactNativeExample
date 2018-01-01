import * as types from '../actions/actionTypes';

const initialState = []

export default function Users (state=initialState , action){
  switch (action.type) {
    case types.NEW_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}