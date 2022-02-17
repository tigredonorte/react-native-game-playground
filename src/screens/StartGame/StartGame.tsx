import React, { useState } from 'react';
import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { StartGameStyles } from './StartGame.styles';

import { Colors } from '../../constants/colors';
import { TextInputComponent } from '../../components/text-input/textInput';
import { NumberContainerComponent } from '../../components/number-container';
import { MainButtonComponent } from '../../components/main-button/MainButton';
import { MAX_NUMBER, MIN_NUMBER } from '../../constants/game-options';

export interface StartGameInput {
    onStartGame: (selectedNumber: number) => void;
}

export const StartGameComponent = (props: StartGameInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmState, setConfirmState] = useState(false);
    const [selectedNumer, setSelectedNumer] = useState(MIN_NUMBER - 1);
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

    let confirmedOutput;
    if (confirmState) {
        confirmedOutput = <CardComponent style={StartGameStyles.summaryContainer}>
            <Text style={StartGameStyles.summaryText}> You Selected</Text>
            <NumberContainerComponent>
               {selectedNumer}
            </NumberContainerComponent>
            <MainButtonComponent onPress={startGame}>Start Game</MainButtonComponent>
        </CardComponent>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={StartGameStyles.container}>
                <Text style={StartGameStyles.title}>Start a New Game!</Text>
                <CardComponent style={StartGameStyles.inputContainer}>
                    <Text>Select a Number!</Text>
                    <TextInputComponent 
                        style={StartGameStyles.textInput}
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={maxNumberLength}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    ></TextInputComponent>

                    <View style={StartGameStyles.buttonContainer}>
                        <View style={StartGameStyles.button}>
                            <MainButtonComponent onPress={confirmInputHandler}>Confirm</MainButtonComponent>
                        </View>
                        <View style={StartGameStyles.button}>
                            <MainButtonComponent type='secondary' onPress={resetInputHandler}>Cancel</MainButtonComponent>
                        </View>
                    </View>
                </CardComponent>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};