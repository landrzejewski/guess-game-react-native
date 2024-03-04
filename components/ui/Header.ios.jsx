import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Header = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
