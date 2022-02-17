import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

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
  },
  item: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    marginTop: 10, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  itemText1: {
    marginRight: 5,
    color: 'black'
  },
  itemText2: {
    color: Colors.primary
  },
  listContainer: {
    flex: 1, // it's needed for android scroll list
    width: '100%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    // flex: 1, // it's needed for android scroll list
  }
});
