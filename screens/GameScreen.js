import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert} from 'react-native'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'


let minimum=1;
let maximum=100;
const GameScreen = ({newNumber, setGameOver, handleScreen}) => {
const getRandomNumber= (min,max,current)=>{
const random= Math.floor(Math.random()* (max-min))+ min;
// console.log(random, min,max)

if(random==current){
  return getRandomNumber(min,max,current)
}else{
  return random
}}
const initialGuess= getRandomNumber(1,100,newNumber)
const [guess, setGuess]= useState(initialGuess);
const handlePress= (direction)=>{
  if((direction== 'lower' && newNumber>guess)|| (direction=='greater'&& newNumber<guess)){
    Alert.alert("Dont lie!","You know that you are lying",[{text:'Sorry!', style:'cancel'}])
    return;
  }
  if(direction== 'lower'){
  maximum= guess-1;
  }else{
  minimum= guess+1;
  }
  const newValue= getRandomNumber(minimum,maximum,guess);
  setGuess(newValue)
  }
  if(guess===newNumber){
    setGameOver(true)
  }
  
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <View>
        <Text style={styles.text}>Higher or Lower?</Text>
        <PrimaryButton onPress={handlePress.bind(this,'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={handlePress.bind(this,'greater')}>+</PrimaryButton>
      </View>
      <View style={styles.restart}>
      <PrimaryButton onPress={handleScreen}>Restart</PrimaryButton>
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:12,
  },
  restart:{
    marginTop:40,
    marginHorizontal: 50,
    width: '70%',
  },
  text:{
    fontSize:20,
    color: 'white',
    marginBottom:10
  }
})
export default GameScreen