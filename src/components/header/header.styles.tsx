import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const HeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingTop: 45,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25
  }
});
