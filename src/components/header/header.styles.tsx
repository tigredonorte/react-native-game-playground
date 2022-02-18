import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { ScreenData } from '../../utils/responsiveness';

export const HeaderStyles = (screenData: ScreenData) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: screenData.isPortrait ? 90 : 60,
      paddingTop: screenData.isPortrait ? 45 : 25,
      backgroundColor: Colors.primary,
      alignItems: 'center',
    },
    title: {
      color: 'black',
      fontSize: 25
    }
  });  
}