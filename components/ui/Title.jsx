import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

function Title({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
