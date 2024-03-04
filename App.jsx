import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './constants/colors';
import StartScreen from './screens/StartScreen';

const App = () => {
  const screen = <StartScreen />;

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/background.jpg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
