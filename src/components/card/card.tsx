import React, { useState } from 'react';
import { View } from 'react-native';
import { cardStyles } from './card.styles';

export interface CardInput {
    children?: any;
    style?: any;
}

export const CardComponent = (props: CardInput) => {
    return (
        <View style={{...cardStyles.container, ...props.style}}>
            {props.children}
        </View>
    );
};