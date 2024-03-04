import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet, Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from 'react';
import Colors from '../constants/colors';
import Header from '../components/ui/Header';
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const StartScreen = props => {
  const {width, height} = useWindowDimensions();
  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        {/*<View style={{...styles.rootContainer, marginTop}}> // nie robić, nieefektywne */}
        <View style={[styles.container, {marginTop}]}>
          <Header>Guess My number</Header>
          <Card>
            <Title>Enter a number</Title>
            <PrimaryButton>Start</PrimaryButton>
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
  },
  buttonContainer: {
    flex: 1,
  },
});
