import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import pageNumbers from './pageNumbers/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  pageNumbers
});

export default reducers;