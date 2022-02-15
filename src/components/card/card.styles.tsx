import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
});
