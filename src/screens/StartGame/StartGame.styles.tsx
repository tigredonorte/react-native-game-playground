import { StyleSheet } from 'react-native';
import { AppTheme } from '../../constants/fonts';

export const StartGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
    padding: 30,
    backgroundColor: 'white'
  },
  buttonContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  textInput: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  summaryText: {
    fontSize: 20
  }
});
