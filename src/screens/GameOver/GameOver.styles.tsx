import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fontSizer, ScreenData } from '../../utils/responsiveness';

export const GameOverStyles = (screenData: ScreenData) => {
  const out = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    summaryText: {
      textAlign: 'center',
      color: Colors.primary,
      marginBottom: 0,
      fontSize: fontSizer('h1')
    },
    scrollContainer: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1
    },
    numberCardsContainer: {
      flexDirection: screenData.isPortrait ? 'column' : 'row', 
      flex: 1, 
      width: '100%', 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    imgContainer: {
      alignItems: 'center',
      borderColor: Colors.secondary,
      borderWidth: 1,
      borderRadius: 300,
      overflow: 'hidden',
      marginHorizontal: screenData.isPortrait ? screenData.screenWidth * .05 : 15,
    },
    summaryContainer: {
      flexDirection: screenData.isPortrait ? 'row' : 'column'
    },
    summaryContainerItem: {
      width: screenData.isPortrait ? '45%' : '100%',
      paddingHorizontal: 5,
      alignItems: 'center',
      marginBottom: 30,
    },
    guessText: {
      color: Colors.secondary,
      marginTop: 15,
      fontSize: screenData.isPortrait ? fontSizer('h5') : fontSizer('h4')
    },
    buttonContainer: {
      padding: 15
    },
    numberColor: {
      backgroundColor: Colors.secondary
    },
    img: {
      width: screenData.isPortrait ? screenData.screenWidth * .7 : screenData.screenHeight *(3/7),
      height: screenData.isPortrait ? screenData.screenWidth * .7 : screenData.screenHeight *(3/7)
    },
    highlight: {
      color: Colors.primary
    }
  });
  return out;
}