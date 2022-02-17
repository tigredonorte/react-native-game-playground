import React from 'react';
import { Image, Text, View } from 'react-native';
import { CardComponent } from '../../components/card/card';
import { NumberContainerComponent } from '../../components/number-container';
import { MainButtonComponent } from '../../components/main-button/MainButton';
import { GameOverStyles } from './GameOver.styles';


export interface GameOverInput {
    onGameOver: () => void;
    guesses: number;
    userNumber: number;
}

export const GameOverComponent = (props: GameOverInput) => {

    const externalImg = false;
    const GameOver = () => {
        props.onGameOver();
    }

    const img = externalImg ? 
        <Image 
            fadeDuration={2000}
            source={{uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_960_720.jpg'}} 
            style={GameOverStyles.img} 
            resizeMode='cover'
        />
        : 
        <Image 
            fadeDuration={2000}
            source={require('../../../assets/images/success.jpg')} 
            style={GameOverStyles.img} 
            resizeMode='contain'
        />;

    return (
        <View style={GameOverStyles.container}>
            <Text style={GameOverStyles.summaryText}> Game finished!  </Text>
            <CardComponent >
                <View style={GameOverStyles.imgContainer}>
                    { img }
                </View>
                <View style={GameOverStyles.numberCardsContainer}>
                    <View style={GameOverStyles.summaryContainer}>
                        <Text style={GameOverStyles.guessText}>Number of rounds:</Text>
                        <NumberContainerComponent style={GameOverStyles.numberColor}>{props.guesses}</NumberContainerComponent>
                    </View>
                    <View style={GameOverStyles.summaryContainer}>
                        <Text style={GameOverStyles.guessText}>User Number: </Text>
                        <NumberContainerComponent style={GameOverStyles.numberColor}>{props.userNumber}</NumberContainerComponent>
                    </View>
                </View>
                <Text style={GameOverStyles.texts}>Is it a external img? Of course it's <Text style={GameOverStyles.highlight}>{externalImg ? 'true': 'false'}</Text>! </Text>
            </CardComponent>
            
            <View style={GameOverStyles.buttonContainer}>
                <MainButtonComponent onPress={GameOver}>New Game</MainButtonComponent>
            </View>
        </View>
    );
};