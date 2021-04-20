import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Login = () => {
    return(
        <View style={Styles.frame}>
            <Text>Login</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    frame:{
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent:'center',
      alignItems: 'center'
    }
  })