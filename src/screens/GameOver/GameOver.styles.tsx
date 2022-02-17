import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

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
    color: Colors.primary,
    marginBottom: 30,
    fontSize: 35
  },
  guessText: {
    color: Colors.secondary,
    marginTop: 15,
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 15,
    height: 100
  },
  button: {
    padding: 30
  },
  numberColor: {
    backgroundColor: Colors.secondary
  },
  img: {
    height: 300,
    width: 300
  },
  imgContainer: {
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 1,
    width: 300,
    height: 300,
    borderRadius: 300,
    overflow: 'hidden'
  },
  texts: {

  },
  highlight: {
    color: Colors.primary
  }
});
