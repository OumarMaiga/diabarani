/*---------------------------------------------------------------------
* Copyright (c) 2022 DIABARANI, Oumarm611. All rights reserved.
* This software is protected and may not be copied, modified, and/or
* distributed without written authorizations from its author.
*--------------------------------------------------------------------*/
import {combineReducers} from 'redux';
import user from './user';
import alert from './alert';
import favorite from './favorite';
import favoriteSerie from './favoriteSerie';
import toWatch from './toWatch';
import inRecent from './inRecent';

export default combineReducers({
  user,
  alert,
  favorite,
  favoriteSerie,
  toWatch,
  inRecent
});