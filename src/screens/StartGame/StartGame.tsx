import React, { useState } from 'react';
import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { StartGameStyles } from './StartGame.styles';

import colors from '../../constants/colors';
import { TextInputComponent } from '../../components/text-input/textInput';
import { NumberContainerComponent } from '../../components/number-container';

export interface StartGameInput {
    onStartGame: (selectedNumber: number) => void;
}

export const StartGameComponent = (props: StartGameInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmState, setConfirmState] = useState(false);
    const [selectedNumer, setSelectedNumer] = useState(-1);

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
        if (isNaN(chosenNumer) || chosenNumer <= 0 || chosenNumer > 99) {
            Alert.alert(
                'Invalid Number', 
                "Number has to been between 1 and 99", [
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
            <Button title="Start Game" onPress={startGame} color={colors.primary}/>
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
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    ></TextInputComponent>

                    <View style={StartGameStyles.buttonContainer}>
                        <View style={StartGameStyles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary}/>
                        </View>
                        <View style={StartGameStyles.button}>
                            <Button title="Cancel" onPress={resetInputHandler} color={colors.secondary}/>
                        </View>
                    </View>
                </CardComponent>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};