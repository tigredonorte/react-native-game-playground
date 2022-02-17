import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderComponent } from './src/components/header/header';
import { MIN_NUMBER } from './src/constants/game-options';
import { initStyle, loadFonts } from './src/initialize/style';
import { GameComponent } from './src/screens/Game/Game';
import { GameOverComponent } from './src/screens/GameOver/GameOver';
import { StartGameComponent } from './src/screens/StartGame/StartGame';
import { logError } from './src/utils/logger';

interface AppState {
  appLoaded: boolean;
  userChoise: number;
  guessRounds: number;
  hasError: boolean;
}

const initialState: AppState = {
  appLoaded: false,
  userChoise: 0,
  guessRounds: 0,
  hasError: false,
};

export default class App extends React.Component<{}, AppState> {

  public constructor(props: any) {
    super(props);
    this.state = { ...initialState };
    loadFonts().then(
      () => {
        initStyle();
        this.setState({ appLoaded: true })
      }, 
      (err) => {
        logError(err);
        this.setState({ appLoaded: false });
      }
    );
  }
  
  public static getDerivedStateFromError = () => ({ hasError: true });
  public componentDidCatch = (error: Error, info: React.ErrorInfo) => logError(error, info);

  private startGameHandler = (selectedNumber: number) => this.setState({ 
    userChoise: selectedNumber,
    guessRounds: 0
  });

  private restartGameHandler = () => this.setState({ 
    userChoise: MIN_NUMBER - 1,
    guessRounds: 0
  });

  private gameOverHandler = (numOfRounds: number) => this.setState({ 
    userChoise: (numOfRounds === 0) ? MIN_NUMBER - 1 : this.state.userChoise,
    guessRounds: numOfRounds
  });

  private getContent = () => {
    if (this.state.userChoise && !isNaN(this.state.userChoise) && this.state.guessRounds <= 0) {
      return <GameComponent userChoise={this.state.userChoise} onGameOver={this.gameOverHandler}></GameComponent>;
    }
  
    else if (this.state.userChoise > 0 ) {
      return <GameOverComponent 
        guesses={this.state.guessRounds} 
        userNumber={this.state.userChoise} 
        onGameOver={this.restartGameHandler}
      ></GameOverComponent>;
    }
    return <StartGameComponent onStartGame={this.startGameHandler}></StartGameComponent>;
  }

  public render(): React.ReactNode {
    
    if (!this.state.appLoaded) {
      return <AppLoading />;
    }
  
    return (
      <View style={styles.screen}>
        <HeaderComponent title="Guess a number"></HeaderComponent>
        { this.getContent() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
