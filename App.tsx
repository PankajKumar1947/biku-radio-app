import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SongListScreen from './src/screens/SongListScreen';
import { Provider } from 'react-redux';
import { store } from './src/reducers';
import TrackPlayer from 'react-native-track-player';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#D7007D',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'BIKU Radio',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
          letterSpacing: 1,
        }
      }
    },
    songlist: {
      screen: SongListScreen,
      options: ({ route }) => ({
        //@ts-ignore
        title: `${route?.params?.genre} PlayStation`,
      }),
    },
    player: {
      screen: PlayerScreen,
      options: {
        title: 'Playing Now',
        headerTitleAlign: 'center',
      },
    }
  },

});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  React.useEffect(() => {
    TrackPlayer.setupPlayer();
  })
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}