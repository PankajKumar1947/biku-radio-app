import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navbar from './src/components/Navbar';
import SongList from './src/components/SongList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>


        <View style={{ flex: 1, position: 'relative' }}>
          <Navbar />
          <SongList />
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
});

export default App;
