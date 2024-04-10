// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';


export default function App() {
const [newNumber,setNewNumber]= useState();
const [gameOver,setGameOver]= useState(false);
let screen= <StartGameScreen setNewNumber={setNewNumber} />;
const handleScreen=()=>{
  screen= <StartGameScreen/>
  setGameOver(false)
  setNewNumber()
};
if(newNumber){
  screen= <GameScreen newNumber={newNumber} setGameOver={setGameOver} handleScreen={handleScreen}/>
}
if(gameOver){
  screen= <GameOverScreen newNumber={newNumber} handleScreen={handleScreen}/>
}
console.log(screen)
  return (
    <LinearGradient colors={['#630E34','#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.container} resizeMode='cover' imageStyle={styles.opacity}>
      <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
  
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor: '#ddb52f',
    flex: 1,
  },
  opacity:{
    opacity:0.16
  }

});
