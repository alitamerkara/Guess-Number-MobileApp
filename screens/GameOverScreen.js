import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import StartGameScreen from './StartGameScreen'
import NumberContainer from '../components/NumberContainer'



const GameOverScreen = ({handleScreen,newNumber}) => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Your number was</Text>
        <NumberContainer>{newNumber}</NumberContainer>
      <PrimaryButton onPress={handleScreen}>Play Again</PrimaryButton>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    marginVertical: 100,
    marginHorizontal: 24,
    backgroundColor: '#630E34',
    padding:15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width:5,height:5},
    shadowOpacity: 0.5,
    shadowRadius: 6,
    alignItems: 'center',
    textAlign: 'center'
  },
  text:{
    fontSize:20,
    color: '#d11767'
  }
})

export default GameOverScreen