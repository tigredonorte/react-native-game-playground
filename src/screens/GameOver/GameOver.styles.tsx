import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const GameOverStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberCardsContainer: {
    flexDirection: 'row'
  },
  summaryContainer: {
    width: '45%',
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  summaryText: {
    color: colors.primary,
    marginBottom: 30,
    fontSize: 35
  },
  guessText: {
    color: colors.secondary,
    marginTop: 15,
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 15
  },
  numberColor: {
    backgroundColor: colors.secondary
  }
});
