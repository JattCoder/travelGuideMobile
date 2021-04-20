import React from 'react'
import { View, Text } from 'react-native'

export default Welcome = () => {
    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:45,fontWeight:'200'}}>Welcome </Text>
                <Text style={{fontSize:45,fontWeight:'200'}}>To,</Text>
            </View>
            <Text style={{fontWeight:'900',fontSize:15}}> ULTIMATE TRAVEL GUIDE</Text>
        </View>
    )
}