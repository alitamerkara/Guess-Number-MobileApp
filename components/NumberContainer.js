import React from 'react'
import {Text, View, StyleSheet} from "react-native"

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
        {children}
        </Text>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: '#ddb52f',
        margin: 24,
    },
    text:{
        fontSize:36,
        padding: 24,
        textAlign: 'center',
        color: '#ddb52f',
        fontWeight: 'bold'
    }
})
export default NumberContainer