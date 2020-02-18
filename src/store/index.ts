import { combineReducers } from 'redux';
import { studentsReducer } from './student/reducers';

export const AppReducer = combineReducers({ students: studentsReducer });