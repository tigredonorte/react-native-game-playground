import { useObservable } from '@ngneat/react-rxjs';
import React from 'react';
import { Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { getScreenDimensions } from '../../utils/responsiveness';
import { HeaderStyles } from './header.styles';

export interface HeaderInput {
    title: string;
}

export const HeaderComponent = (props: HeaderInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Style = HeaderStyles(screenData);
    return (
        <View style={Style.container}>
            <Text style={Style.title}>{props.title}</Text>
        </View>
    );
};

