import React from 'react'
import { View, Text } from 'react-native'
import Icons from './components/icons'

export default Api = (props) => {
    return(
        <View>
            <Text style={{color:'#C0C0C0'}}> API</Text>
            <Icons setApi={props.setApi} api={props.api}/>
        </View>
    )
}