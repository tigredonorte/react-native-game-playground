import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import { NumberContainerStyles, StyleType } from './numberContainer.styles';

export interface NumberContainerType extends ViewProps {
    size?: StyleType;
}

export class NumberContainerComponent extends React.Component<NumberContainerType> {
    public constructor(props: NumberContainerType) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <View style={{ ...NumberContainerStyles.container, padding: this.props.size === 'big' ? 30: 10 }}>
                <Text style={NumberContainerStyles.number}>{this.props.children}</Text>
            </View>
        );
    }
};

