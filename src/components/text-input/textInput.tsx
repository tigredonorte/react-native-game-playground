import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TextInputStyles } from './textInput.styles';

export interface TextInputType extends TextInputProps {
}

export const TextInputComponent = (props: TextInputType) => {
    return (
        <TextInput {...props} style={{...TextInputStyles.textInput, ...props.style as any}}/>
    );
};

