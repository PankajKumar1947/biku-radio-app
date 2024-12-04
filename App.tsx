import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/reducers';
import TrackPlayer from 'react-native-track-player';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react'
import { RootStack } from './src/navigation/route';

const Navigation = createStaticNavigation(RootStack);

let persistor = persistStore(store);

export default function App() {
  React.useEffect(() => {
    TrackPlayer.setupPlayer();
  })
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}