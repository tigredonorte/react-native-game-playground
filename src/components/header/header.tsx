import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { HeaderStyles } from './header.styles';

export interface HeaderInput {
    title: string;
}

export const HeaderComponent = (props: HeaderInput) => {

    return (
        <View style={HeaderStyles.container}>
            <Text style={HeaderStyles.title}>{props.title}</Text>
        </View>
    );
};

