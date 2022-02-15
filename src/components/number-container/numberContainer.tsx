import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import { NumberContainerStyles } from './numberContainer.styles';

export interface NumberContainerType extends ViewProps {
    style?: any;
}

export const NumberContainerComponent = (props: NumberContainerType) => {
    return (
        <View style={{...NumberContainerStyles.container, ...props.style}}>
            <Text style={NumberContainerStyles.number}>{props.children}</Text>
        </View>
    );
};

