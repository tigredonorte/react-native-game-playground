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
        const size = this.props.size === 'big' ? 30 : this.props.size === 'medium' ? 20 : 10;
        return (
            <View style={{ ...NumberContainerStyles.container, padding: size }}>
                <Text style={NumberContainerStyles.number}>{this.props.children}</Text>
            </View>
        );
    }
};

