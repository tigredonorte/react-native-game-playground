import { useObservable } from '@ngneat/react-rxjs';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { CardComponent } from '../../components/card/card';
import { MainButtonComponent } from '../../components/main-button/MainButton';
import { NumberContainerComponent } from '../../components/number-container';
import { getScreenDimensions } from '../../utils/responsiveness';
import { GameOverStyles } from './GameOver.styles';

export interface GameOverInput {
    onGameOver: () => void;
    guesses: number;
    userNumber: number;
}

export const GameOverComponent = (props: GameOverInput) => {

    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const externalImg = false;
    const GameOver = () => {
        props.onGameOver();
    }

    const Styles = GameOverStyles(screenData);
    const img = <Image 
        fadeDuration={2000}
        source={externalImg 
            ? {uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_960_720.jpg'} 
            : require('../../../assets/images/success.jpg')
        } 
        style={Styles.img} 
        resizeMode='contain'
    />;

    const title = screenData.isPortrait ? <Text style={Styles.summaryText}> Game finished!  </Text> : null;
    return (
        <View style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollContainer}>
                <CardComponent>
                    {title}
                    <View style={Styles.numberCardsContainer}>
                        <View style={Styles.imgContainer}>
                            {img}
                        </View>
                        <View style={Styles.summaryContainer}>
                            <View style={Styles.summaryContainerItem}>
                                <Text style={Styles.guessText}>Number of Rounds:</Text>
                                <NumberContainerComponent style={Styles.numberColor}>{props.guesses}</NumberContainerComponent>
                            </View>
                            <View style={Styles.summaryContainerItem}>
                                <Text style={Styles.guessText}>User Number: </Text>
                                <NumberContainerComponent style={Styles.numberColor}>{props.userNumber}</NumberContainerComponent>
                            </View>
                        </View>
                    </View>
                    <Text>
                        Is it a external img? Of course it's 
                        <Text style={Styles.highlight}>{externalImg ? 'true': 'false'}</Text>! 
                    </Text>
                </CardComponent>
            </ScrollView>
            <View style={Styles.buttonContainer}>
                <MainButtonComponent onPress={GameOver}>New Game</MainButtonComponent>
            </View>
        </View>
    );
};