import { useObservable } from '@ngneat/react-rxjs';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';

import { CardComponent } from '../../components/card/card';
import { MainButtonComponent } from '../../components/main-button/MainButton';
import { NumberContainerComponent } from '../../components/number-container';
import { TextInputComponent } from '../../components/text-input/textInput';
import { MAX_NUMBER, MIN_NUMBER } from '../../constants/game-options';
import { getScreenDimensions } from '../../utils/responsiveness';
import { StartGameStyles } from './StartGame.styles';

export interface StartGameInput {
    onStartGame: (selectedNumber: number) => void;
}

export const StartGameComponent = (props: StartGameInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmState, setConfirmState] = useState(false);
    const [selectedNumer, setSelectedNumer] = useState(MIN_NUMBER - 1);
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));

    const maxNumberLength = (MAX_NUMBER - 1).toString().length;
    const numberInputHandler = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setConfirmState(false);
        setEnteredValue('');
    }

    const startGame = () => {
        props.onStartGame(selectedNumer);
    }

    const confirmInputHandler = () => {
        const chosenNumer = parseInt(enteredValue);
        if (isNaN(chosenNumer) || chosenNumer <= MIN_NUMBER || chosenNumer >= MAX_NUMBER) {
            Alert.alert(
                'Invalid Number', 
                `Number has to been between ${MIN_NUMBER + 1} and ${MAX_NUMBER - 1}`, [
                {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
            ]);
            return;
        }
        setConfirmState(true);
        setSelectedNumer(parseInt(enteredValue));
        setEnteredValue('');
    }

    const Style = StartGameStyles(screenData);
    const getContainer = (
        title: string, 
        extra: any, 
        btn1Action: Function, 
        btn1Txt: string, 
        btn2Action: Function, 
        btn2Txt: string
    ) => (
        <CardComponent style={Style.summaryContainer}>
            <View style={Style.containerBase}>
                <Text style={Style.summaryText}>{title}</Text>
                <View style={Style.containerBase}>
                    {extra}
                </View>
            </View>
            <View style={Style.buttonContainer}>
                <MainButtonComponent style={Style.button} onPress={() => btn1Action()}>
                    {btn1Txt}
                </MainButtonComponent>
                <MainButtonComponent 
                    style={{...Style.button, marginTop: screenData.isPortrait ? 0 : 10 }} 
                    type='secondary' 
                    onPress={() => btn2Action()}
                >
                    {btn2Txt}
                </MainButtonComponent>
            </View>
        </CardComponent>
    );

    const container = !confirmState 
        ? getContainer('Select a Number!',
            <TextInputComponent 
                style={Style.textInput}
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={maxNumberLength}
                value={enteredValue}
                onChangeText={numberInputHandler}
            ></TextInputComponent>,
            confirmInputHandler, 'Confirm', resetInputHandler, 'Cancel'
        )
        : getContainer('You Selected', 
            <NumberContainerComponent>
                {selectedNumer}
            </NumberContainerComponent>,
            startGame, 'Start Game', resetInputHandler, 'Cancel'
        ) 

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
                    <View style={Style.container}>
                        {container}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};