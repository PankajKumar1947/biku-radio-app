import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Welcome to PK Radio',
      }
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
  return <Navigation />;
}