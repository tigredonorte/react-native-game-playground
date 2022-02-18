import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fontSizer, ScreenData } from '../../utils/responsiveness';

export const StartGameStyles = (screenData: ScreenData) => {
  const isXs = screenData.screenClass === 'xs';
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      
    },
    title: {
      fontSize: fontSizer('h2'),
      marginVertical: 10,
    },
    inputContainer: {
      width: '90%',
      minWidth: 300,
      maxWidth: '95%',
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
      flexDirection: screenData.isPortrait ? 'row' : 'column',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginTop: 15,
      alignItems: 'center'
    },
    button: {
      width: (screenData.isPortrait && !isXs) ? screenData.screenWidth / 3.5 : 'auto',
      display: 'flex'
    },
    textInput: {
      width: 50,
      textAlign: 'center'
    },
    summaryContainer: {
      width: '90%',
      marginTop: 10,
      paddingHorizontal: isXs ? 10 : 60,
      alignItems: 'center',
    },
    summaryText: {
      color: Colors.primary,
      fontSize: fontSizer('h2'),
    },
    containerBase: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
  });  
}