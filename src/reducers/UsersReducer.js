import * as types from '../actions/actionTypes';
import FirebaseMainService from '../services/FirebaseMainService';

const initialState = FirebaseMainService.getUsers().then((res) => { return res; });

export default function Users (state=initialState , action){
  switch (action.type) {
    case types.NEW_USER:
      FirebaseMainService.saveUserInDatabase(action.payload).then(
        (res) => {      
          return [...state, action.payload];                
        }
      ).catch((err) => { return state } );
    default:
      return state;
  }
}