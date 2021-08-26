import { combineReducers } from 'redux';
import trello from '@/reducer/trello';

const rootReducer = combineReducers({ trello });

export default rootReducer;
