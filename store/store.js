import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
const middleware = [thunk];

/* Reducer root */
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  let persistor = persistStore(store);

  return { store, persistor };
};
