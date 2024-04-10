import React from 'react'
import {Text, StyleSheet} from "react-native"

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles= StyleSheet.create({
    title:{
      fontSize: 24,
      color: '#ddb52f',
      fontWeight: 'bold',
      padding: 12,
      textAlign: 'center'
    }
  })

export default Title