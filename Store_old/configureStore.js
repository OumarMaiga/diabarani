// Store/configureStore.js

import { createStore } from 'redux';
import userSession from './Reducers/UserSession'

export default createStore(userSession)