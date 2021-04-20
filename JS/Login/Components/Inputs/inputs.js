import React from 'react'
import { View, Text} from 'react-native'
import Email from './components/email'
import Password from './components/password'

export default Inputs = (props) => {
    return(
        <View>
            <View style={{height:'40%'}}><Email setEmail={props.setEmail}/></View>
            <View style={{height:'40%',marginTop:'-16%'}}><Password setPassword={props.setPassword}/></View>
        </View>
    )
}