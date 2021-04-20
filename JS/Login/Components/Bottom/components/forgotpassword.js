import React,{ useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default Forgotpassword = (props) => {

    const [forgotOpacity] = useState(new Animated.Value(1))

    animateForgot = () => {
        Animated.timing(forgotOpacity,{
            toValue: props.selection == 'Login' ? 1 : 0,
            duration:500,
            useNativeDriver:false
        }).start()
    }

    useEffect(()=>{
        if(props.selection) animateForgot()
    },[props.selection])

    return(
        <Animated.View style={{opacity:forgotOpacity}}>
            <TouchableOpacity><Text style={{fontWeight:'500',fontSize:14,paddingHorizontal:'7%',color:'rgba(0,0,0,.8)'}}>Forgot password?</Text></TouchableOpacity>
        </Animated.View>
    )
}