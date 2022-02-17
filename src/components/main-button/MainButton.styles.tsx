import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

export type ButtonTypes = 'primary' | 'secondary';
export type ButtonSizeTypes = 'small' | 'medium' | 'big';

const ButtonSizes = {
    small: {
        paddingVertical: 6,
        paddingHorizontal: 15
    },
    medium: {
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    big: {
        paddingVertical: 12,
        paddingHorizontal: 30
    },
};

const ButtonFontSizes = {
    small: 12,
    medium: 15,
    big: 18
};

export const MainButtonStyles = (size: ButtonSizeTypes, type: ButtonTypes) => StyleSheet.create({
    button: {
        backgroundColor: Colors[type],
        borderRadius: 15,
        ...ButtonSizes[size],
    },
    buttonText: {
        textAlign: 'center',
        fontSize: ButtonFontSizes[size],
        color: Colors[`${type}Contrast`]
    },
});
