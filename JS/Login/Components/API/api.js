import React,{ useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'
import Icons from './components/icons'

export default Api = (props) => {

    const [apiOpacity] = useState(new Animated.Value(0))

    animateApi = () => {
        setTimeout(()=>Animated.timing(apiOpacity,{
            toValue:1,
            duration:500,
            useNativeDriver:false
        }).start(),3000)
    }

    useEffect(()=>{
        animateApi()
    },[])

    return(
        <Animated.View style={{opacity:apiOpacity}}>
            <Text style={{color:'#C0C0C0'}}> API</Text>
            <Icons setApi={props.setApi} api={props.api}/>
        </Animated.View>
    )
}