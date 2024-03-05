import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './constants/colors';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const onGameOver = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  let screen = <StartScreen onNumberPicked={setPickedNumber} />;

  if (pickedNumber) {
    screen = <GameScreen onGameOver={onGameOver} />;
  }

  if (gameIsOver && pickedNumber) {
    screen =
  }

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
