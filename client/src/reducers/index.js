import { combineReducers } from 'redux';

import auth from './auth';
import scores from './scores'

export const reducers = combineReducers({ auth, scores });