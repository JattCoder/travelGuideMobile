import React from 'react'
import { View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ActionButton = () => {
    return(
        <View style={{width:'70%',height:'55%',borderRadius:10,backgroundColor:'red'}}>
            <TouchableOpacity style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}><Image style={{width:40,height:20}} source={require('../../../../Icons/action.png')}/></TouchableOpacity>
        </View>
    )
}