import React from 'react'
import { View } from 'react-native'
import Forgotpassword from './components/forgotpassword'
import ActionButton from './components/actionButton'

export default Bottom = (props) => {
    return(
        <View style={{height:'100%',width:'100%'}}>
            <Forgotpassword />
            <View style={{position:'absolute',bottom:0,width:'100%',height:'75%',backgroundColor:'#C0C0C0'}}/>
            <View style={{position:'absolute',height:'100%',width:'35%',right:0}}>
                <ActionButton attempt={props.attempt}/>
            </View>
        </View>
    )
}