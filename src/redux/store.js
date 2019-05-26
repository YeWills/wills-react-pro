import {createStore,combineReducers} from 'redux';
import {addRedux} from './reducer/addReducer';
import {tyyReducer} from './reducer/tyyReducer';

export const store = createStore(combineReducers({addRedux,tyyReducer}));
