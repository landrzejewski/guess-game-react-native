import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/ui/Header';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary;
let maxBoundary;

const GameScreen = ({pickedNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < pickedNumber) ||
      (direction === 'greater' && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver();
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.instructionText}>
        <Title>Higher or lower?</Title>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Text>Lower</Text>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Text>Greater</Text>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  return (
    <View style={styles.screen}>
      <Header>AI guess</Header>
      {content}
      <View style={styles.listContainer} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
