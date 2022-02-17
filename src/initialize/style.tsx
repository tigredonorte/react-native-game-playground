import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import {
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    useFonts
} from '@expo-google-fonts/lato';

export const loadFonts = () => {
    return Font.loadAsync({
        'roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    });
}

export const loadFontsGoogleFont = () => {
    return useFonts({
        Lato_400Regular,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_400Regular_Italic,
    });
}

import { AppTheme } from '../constants/fonts';

export const initStyle = () => {
    setCustomText({ 
        style: { 
          fontFamily: AppTheme.defaultFont
        }
    });
}
