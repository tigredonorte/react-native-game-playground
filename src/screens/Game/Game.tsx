import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { MainButtonComponent } from '../../components/main-button/MainButton';
import { NumberContainerComponent } from '../../components/number-container';
import { MAX_NUMBER, MIN_NUMBER } from '../../constants/game-options';
import { GameStyles } from './Game.styles';

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.ceil((Math.random() * (max - min))+ min);
    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return random;
}

export interface GameInput {
    userChoise: number;
    onGameOver: (numOfRounds: number) => void;
}

export const renderListItem = (guess: number, numberOfRounds: number) => (
    <View key={guess} style={GameStyles.item}>
        <Text style={GameStyles.itemText1}>#{numberOfRounds}</Text>
        <Text style={GameStyles.itemText2}>{guess}</Text>
    </View>
);

export const GameComponent = (props: GameInput) => {

    const firstGuess = generateRandomBetween(MIN_NUMBER - 1, MAX_NUMBER, props.userChoise);
    const [currentGuess, setCurrentGuess] = useState(firstGuess);
    const [pastGuesses, setPastGuesses] = useState([firstGuess]);
    const minGuess = useRef(MIN_NUMBER);
    const maxGuess = useRef(MAX_NUMBER);
    const { userChoise, onGameOver } = props;
    
    useEffect(() => {
        if (currentGuess === userChoise) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const setLowerNumber = () => setNumber(false, () => minGuess.current = currentGuess);
    const setMaxNumber = () => setNumber(true, () => maxGuess.current = currentGuess);
    const setNumber = (isMax: boolean, fn: () => void) => {
        if ((isMax && currentGuess < userChoise) || (!isMax && currentGuess > userChoise)) {
            return Alert.alert(`Don't lie!`, `The chosen number is ${isMax ? 'greater': 'lower'}!`, [{ text: 'Sorry!', style: 'cancel'}]);
        }
        fn();
        const newGuess = generateRandomBetween(minGuess.current, maxGuess.current, currentGuess);
        setCurrentGuess(newGuess);
        setPastGuesses(cur => [newGuess, ...cur] as any)
    }

    return (
        <View style={GameStyles.container}>
            <View style={GameStyles.guessContainer}>
                <CardComponent>
                    <NumberContainerComponent>
                        {currentGuess}
                    </NumberContainerComponent>
                    <View style={GameStyles.buttonContainer}>
                        <MainButtonComponent onPress={setMaxNumber}>
                            <Ionicons name="arrow-down" size={32} color="white" />
                        </MainButtonComponent>
                        <MainButtonComponent type='secondary' onPress={setLowerNumber}>
                            <Ionicons name="arrow-up" size={32} color="white" />
                        </MainButtonComponent>
                    </View>
                </CardComponent>
                <View style={GameStyles.listContainer}>
                    <ScrollView contentContainerStyle={GameStyles.list}>
                        {pastGuesses.map((it, i) => renderListItem(it, pastGuesses.length - i))}
                    </ScrollView>
                </View>
            </View>
            
            <View>
                <MainButtonComponent size='big' onPress={() => onGameOver(0)}>Restart Game</MainButtonComponent>
            </View>
        </View>
    );
};