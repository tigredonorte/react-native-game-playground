import React from 'react';
import { Button, Text, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { NumberContainerComponent } from '../../components/number-container';
import colors from '../../constants/colors';
import { GameOverStyles } from './GameOver.styles';


export interface GameOverInput {
    onGameOver: () => void;
    guesses: number;
    userNumber: number;
}

export const GameOverComponent = (props: GameOverInput) => {

    const GameOver = () => {
        props.onGameOver();
    }

    return (
        <View style={GameOverStyles.container}>
            <Text style={GameOverStyles.summaryText}> Game finished!  </Text>
            <View style={GameOverStyles.numberCardsContainer}>
                <CardComponent style={GameOverStyles.summaryContainer}>
                    <Text style={GameOverStyles.guessText}>Number of rounds:</Text>
                    <NumberContainerComponent style={GameOverStyles.numberColor}>{props.guesses}</NumberContainerComponent>
                </CardComponent>
                <CardComponent style={GameOverStyles.summaryContainer}>
                    <Text style={GameOverStyles.guessText}>User Number: </Text>
                    <NumberContainerComponent style={GameOverStyles.numberColor}>{props.userNumber}</NumberContainerComponent>
                </CardComponent>
            </View>
            <View style={GameOverStyles.buttonContainer}>
                <Button title="New Game" onPress={GameOver} color={colors.primary}/>
            </View>
        </View>
    );
};