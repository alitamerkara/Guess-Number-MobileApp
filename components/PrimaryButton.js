import { View, Text, Pressable, StyleSheet } from "react-native"



const PrimaryButton = (props) => {
  return (
    <View style={styles.outerButton}>
      <Pressable style={({pressed})=> pressed? [styles.button, styles.pressed]:styles.button} android_ripple={{color:'#9e0e4c'}} onPress={props.onPress}>
        <Text style={styles.text}>{props.children}</Text>
        </Pressable>
    </View>
    
  )
}

const styles= StyleSheet.create({
  outerButton:{
    margin: 4,
  },
  button:{
    backgroundColor: '#aa0d51',
    paddingHorizontal:16,
    paddingVertical:8,
    elevation: 2,
    borderRadius: 8
  },
  text:{
   color: 'white',
   textAlign:'center',
   fontSize:20,
  },
  pressed:{
    opacity: 0.75,
  }
})

export default PrimaryButton