import { StyleSheet } from 'react-native';
import { AppTheme } from '../../constants/fonts';

export const GameStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  guessContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '90%'
  }
});
