import { combineReducers } from 'redux';
import count from './count';
import title from './title';
import day from './day';

const reducers = { count, title, day };
export default combineReducers(reducers);

