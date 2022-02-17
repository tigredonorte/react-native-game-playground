import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, ScrollView, Text, View } from 'react-native';
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
        fn.bind(this)()
        const newGuess = generateRandomBetween(minGuess.current + 1, maxGuess.current - 1, currentGuess);
        if (pastGuesses.includes(newGuess)) {
            return Alert.alert(
                `Something went wrong`,
                `The guess number ${newGuess} is picked already!`, [{ text: 'Try again!', style: 'cancel'}]
            );
        }
        setCurrentGuess(newGuess);
        setPastGuesses(cur => {
            cur.unshift(newGuess);
            return cur;
        })
    }

    return (
        <View style={GameStyles.container}>
            <View style={GameStyles.guessContainer}>
                <CardComponent>
                    <View style={GameStyles.buttonContainer}>
                        <NumberContainerComponent>
                            {minGuess.current}
                        </NumberContainerComponent>
                        <NumberContainerComponent>
                            {maxGuess.current}
                        </NumberContainerComponent>
                    </View>
                    <NumberContainerComponent size='big'>
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
                    {/* <ScrollView contentContainerStyle={GameStyles.list}>
                        {pastGuesses.map((it, i) => renderListItem(it, pastGuesses.length - i))}
                    </ScrollView> */}
                    <FlatList
                        keyExtractor={(item: number) => `_${item}`}
                        contentContainerStyle={GameStyles.list}
                        data={pastGuesses}
                        renderItem={guess => renderListItem(guess.item, pastGuesses.length - guess.index)
                    } />
                </View>
            </View>
            
            <View>
                <MainButtonComponent size='big' onPress={() => onGameOver(0)}>Restart Game</MainButtonComponent>
            </View>
        </View>
    );
};