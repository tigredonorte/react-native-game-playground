import { useObservable } from '@ngneat/react-rxjs';
import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { HeaderComponent } from './src/components/header/header';
import { MIN_NUMBER } from './src/constants/game-options';
import { initStyle, loadFonts } from './src/initialize/style';
import { GameComponent } from './src/screens/Game/Game';
import { GameOverComponent } from './src/screens/GameOver/GameOver';
import { StartGameComponent } from './src/screens/StartGame/StartGame';
import { getScreenDimensions } from './src/utils/responsiveness';

export default function App() {
  
  const [ screenSize ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
  const [ appLoaded, setAppLoaded ] = useState(false);
  const [ userChoise, setUserChoise ] = useState(0);
  const [ guessRounds, setGuessRounds ] = useState(0);

  loadFonts().then(
    () => setAppLoaded(true), 
    (err) => {
      console.log(err);
      setAppLoaded(true);
    }
  );

  if (!appLoaded) {
    return <AppLoading />;
  }
  initStyle();

  const startGameHandler = (selectedNumber: number) => {
    setUserChoise(selectedNumber);
    setGuessRounds(0);
  }

  const restartGameHandler = () => {
    setUserChoise(MIN_NUMBER - 1);
  }

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
    if (numOfRounds === 0) {
      setUserChoise(MIN_NUMBER - 1);
    }
  }

  let content = <StartGameComponent onStartGame={startGameHandler}></StartGameComponent>;
  if (userChoise && !isNaN(userChoise) && guessRounds <= 0) {
    content = <GameComponent userChoise={userChoise} onGameOver={gameOverHandler}></GameComponent>;
  }

  else if (userChoise > 0 ) {
    content = <GameOverComponent 
      guesses={guessRounds} 
      userNumber={userChoise} 
      onGameOver={restartGameHandler}
    ></GameOverComponent>;
  }
  return (
    <SafeAreaView style={styles.screen}>
        <HeaderComponent title="Guess a number"></HeaderComponent>
        { content }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
