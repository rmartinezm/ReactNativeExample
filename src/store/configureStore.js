import RootReducer from '../reducers';
import { createStore } from 'redux';

export default function configureStore(){
	return createStore(RootReducer);
}