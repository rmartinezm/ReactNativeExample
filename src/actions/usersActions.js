import * as types from './actionTypes';

export function saveNewUser(user){
    return {
        type: types.NEW_USER,
        payload: user
    }
}