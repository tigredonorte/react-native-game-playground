import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { ScreenData } from '../../utils/responsiveness';

export const HeaderStyles = (screenData: ScreenData) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: screenData.isPortrait ? 90 : 60,
      paddingTop: screenData.isPortrait ? 45 : 25,
      alignItems: 'center',
      ...Platform.select({
        android: {
          backgroundColor: Colors.primary
        },
        ios: {
          backgroundColor: Colors.secondary
        }
      })
    },
    containerAndroid: {
      backgroundColor: Colors.secondary
    },
    title: {
      color: 'black',
      fontSize: 25
    }
  });  
}