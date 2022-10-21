import * as React from 'react';
import Navigation from './src/navigation/main/'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./store/store";

export default () => {
  
  const { store, persistor } = reduxStore();
  const isAuthenticated = null
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
