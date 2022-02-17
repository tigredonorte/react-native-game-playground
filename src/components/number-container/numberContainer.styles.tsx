import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const NumberContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.primaryContrast
  }
});
