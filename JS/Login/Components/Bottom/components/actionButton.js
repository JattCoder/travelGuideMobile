import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

export default ActionButton = (props) => {
    return(
        <View style={{width:'60%',height:'50%',borderRadius:10,backgroundColor:'#ADA996'}}>
            <TouchableOpacity onPress={()=>props.attempt()} style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:40,height:20}} source={require('../../../../Icons/action.png')}/>
            </TouchableOpacity>
        </View>
    )
}