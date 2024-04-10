import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"
import Title from "../components/Title"



const StartGameScreen = ({setNewNumber}) => {
const [enteredValue, setEnteredValue]= useState('')
const handleChange = (enteredText)=>{
  setEnteredValue(enteredText)
}
const resetValue= ()=>{
  setEnteredValue('')
}
const pressHandler= ()=>{
 const chosenNumber= parseInt(enteredValue)
 if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99){
Alert.alert('Invalid Number !', 'Your value must be between 0 and 99',
[{text:'Okay',style:'destructive', onPress: resetValue}])
 }else{
  setNewNumber(chosenNumber)
  
 }
}
  return (
    <View style={styles.rootContainer}>
      <Title> Guess Number</Title>
    <View style={styles.container }>
      <Text  style={styles.text}>Enter a Number</Text>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" value={enteredValue}  onChangeText={handleChange}/>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetValue}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={pressHandler}>Confirm</PrimaryButton>
        </View>
        </View>
    </View>
    </View>
    
  )
}

const styles= StyleSheet.create({
  rootContainer:{
    marginVertical: 100,
    marginHorizontal: 24,
  },
  container:{
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
  numberInput:{
    fontSize: 32,
    color: "#ddb52f",
    borderBottomWidth:2,
    borderBottomColor: '#ddb52f',
    width:50,
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonsContainer:{
    flexDirection: 'row'
  },
  buttonContainer:{
    flex:1,
  },
  text:{
    color: '#d11767'
  }
})

export default StartGameScreen