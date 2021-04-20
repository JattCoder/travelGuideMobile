import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default Forgotpassword = () => {
    return(
        <View>
            <TouchableOpacity><Text style={{fontWeight:'500',fontSize:14,paddingHorizontal:'7%',color:'rgba(0,0,0,.8)'}}>Forgot password?</Text></TouchableOpacity>
        </View>
    )
}