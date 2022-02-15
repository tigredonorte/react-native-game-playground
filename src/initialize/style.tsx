import { setCustomText } from 'react-native-global-props';
import {
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    useFonts
} from '@expo-google-fonts/lato';

export const loadFonts = () => {
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
          fontFamily: AppTheme.Lato
        }
    });
}
