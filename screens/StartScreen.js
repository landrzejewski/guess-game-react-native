import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/colors';
import Header from '../components/ui/Header';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const StartScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const {width, height} = useWindowDimensions();
  const marginTop = height < 380 ? 30 : 100;

  const restNumber = () => setEnteredNumber('');

  const confirmNumber = () => {
    const pickedNumber = parseInt(enteredNumber);

    if (isNaN(pickedNumber) || pickedNumber <= 0 || pickedNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Ok', style: 'cancel', onPress: restNumber}],
      );
      return;
    }

    props.onNumberPicked(pickedNumber);
  };

  const Body = () => {
    return (
      <>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEnteredNumber}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={restNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        {/*<View style={{...styles.rootContainer, marginTop}}> // nie robić, nieefektywne */}
        <View style={[styles.container, {marginTop}]}>
          <Header>Guess My number</Header>
          <Card>
            <Title>Enter a number</Title>
            <Body />
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 28,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
