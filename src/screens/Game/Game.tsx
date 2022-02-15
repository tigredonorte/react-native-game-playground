import React, { useRef, useState, useEffect } from 'react';
import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { GameStyles } from './Game.styles';

import colors from '../../constants/colors';
import { TextInputComponent } from '../../components/text-input/textInput';
import { NumberContainerComponent } from '../../components/number-container';

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.ceil((Math.random() * (max - min))+ min);
    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return random;
}

const minNumber = 1;
const maxNumber = 100;

export interface GameInput {
    userChoise: number;
    onGameOver: (numOfRounds: number) => void;
}

export const GameComponent = (props: GameInput) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(minNumber, maxNumber, props.userChoise));
    const [rounds, setRounds] = useState(0);
    const minGuess = useRef(minNumber);
    const maxGuess = useRef(maxNumber);
    const { userChoise, onGameOver } = props;
    
    useEffect(() => {
        console.log(currentGuess, userChoise);
        if (currentGuess === userChoise) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const setLowerNumber = () => {
        if (currentGuess > userChoise) {
            return Alert.alert(`Don't lie!`, 'The chosen number is lower!', [{ text: 'Sorry!', style: 'cancel'}]);
        }
        minGuess.current = currentGuess;
        setCurrentGuess(generateRandomBetween(minGuess.current, maxGuess.current, currentGuess));
        setRounds((currentRounds) => currentRounds + 1);
    }
    const setMaxNumber = () => {
        if (currentGuess < userChoise) {
            return Alert.alert(`Don't lie!`, 'The chosen number is greater!', [{ text: 'Sorry!', style: 'cancel'}]);
        }
        maxGuess.current = currentGuess;
        setCurrentGuess(generateRandomBetween(minGuess.current, maxGuess.current, currentGuess));
        setRounds((currentRounds) => currentRounds + 1);
    }

    return (
        <View style={GameStyles.container}>
            <View style={GameStyles.guessContainer}>
                <NumberContainerComponent>
                    {currentGuess}
                </NumberContainerComponent>
                <CardComponent style={GameStyles.buttonContainer}>
                    <Button title="lower" onPress={setMaxNumber}/>
                    <Button title="greater" onPress={setLowerNumber}/>
                </CardComponent>
            </View>
            
            <View>
                <Button title="Restart Game" onPress={() => onGameOver(0)}/>
            </View>
        </View>
    );
};