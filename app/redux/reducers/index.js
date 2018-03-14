import {combineReducers} from 'redux';
import todoReducers from './todoReducers.js';
import counterReducers from './counterReducers';

export default combineReducers(Object.assign({}, todoReducers, counterReducers));