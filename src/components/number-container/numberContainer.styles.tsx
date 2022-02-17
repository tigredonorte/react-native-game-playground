import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export type StyleType = 'small' | 'big';
export const NumberContainerStyles = StyleSheet.create({
  container: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.primary,
  }
})
