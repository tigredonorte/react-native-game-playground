import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const NumberContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colors.primaryContrast
  }
});
