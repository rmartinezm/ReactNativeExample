import * as types from '../actions/actionTypes';
import FirebaseMainService from '../services/FirebaseMainService';

const initialState = [];
FirebaseMainService.getUsers().then((res) => { res.forEach((user) => initialState.push(user))});

export default function Users (state=initialState , action){
  switch (action.type) {
    case types.NEW_USER:
      FirebaseMainService.saveUserInDatabase(action.payload);
      return [...state, action.payload];         
    default:
      return state;
  }
}