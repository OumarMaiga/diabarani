/*---------------------------------------------------------------------
* Copyright (c) 2021 POOZ, ConraD (siret 90038867900012). All rights reserved.
* This software is protected and may not be copied, modified, and/or
* distributed without written authorizations from its author.
*--------------------------------------------------------------------*/
import {combineReducers} from 'redux';
import auth from './auth';
import alert from './alert';

export default combineReducers({
  auth,
  alert
});