import React,{ useEffect, useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

export default Icons = (props) => {

    const [api,setApi] = useState('Ruby')

    useEffect(()=>{
        if(props.api) setApi(props.api)
    },[props.api])

    return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={()=>props.setApi('JS')}>
                <Image style={{height:30,width:30}} source={api == 'JS' ? require(`../../../../Icons/select_js.png`) : require(`../../../../Icons/deselect_js.png`)}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={()=>props.setApi('Ruby')} style={{marginHorizontal:'2%'}}>
                <Image style={{height:24,width:24}} source={api == 'Ruby' ? require(`../../../../Icons/select_ruby.png`) : require(`../../../../Icons/deselect_ruby.png`)}/>
            </TouchableOpacity>
        </View>
    )
}