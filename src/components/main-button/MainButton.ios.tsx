import React from 'react';
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

import { ButtonSizeTypes, ButtonTypes, MainButtonStyles } from './MainButton.styles';

export interface MainButtonInput {
    type?: ButtonTypes;
    size?: ButtonSizeTypes;
    style?: any;
    onPress?: () => void;
}

export class MainButtonComponent extends React.Component<MainButtonInput> {

    private btnStyle;
    public constructor(props: MainButtonInput) {
        super(props);
        this.btnStyle = MainButtonStyles(this.props?.size ?? 'medium', this.props?.type ?? 'primary');
    }

    public render = () => (
        <TouchableOpacity style={{...this.btnStyle.buttonContainer, ...this.props.style}} activeOpacity={.8} onPress={this.props?.onPress}>
            <View style={this.btnStyle.button}>
                <Text style={this.btnStyle.buttonText}>
                    {this.props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
