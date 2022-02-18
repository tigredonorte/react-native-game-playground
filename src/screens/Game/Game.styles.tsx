import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const GameStylesPortrait = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  guessContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
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
    width: Dimensions.get('window').width > 350 ? '80%': '100%',
    marginBottom: 10
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  numberContainerTop: {
  },
});

export const GameStylesLandscape = StyleSheet.create({
  guessContainer: {
    ...GameStylesPortrait.guessContainer,
    flexDirection: 'row',
  },
  numberContainerTop: {
    width: '50%',
    marginRight: '5%',
  },
  listContainer: {
    width: '45%',
    marginBottom: 10
  }
});
