import * as React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./store/store";

export default () => {
  
  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
