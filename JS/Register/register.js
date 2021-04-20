import React,{ useState, useEffect } from 'react'
import { View, Animated, Text } from 'react-native'

export default Register = (props) => {

    const [regOpacity] = useState(new Animated.Value(0))

    animateRegister = () => {
        setTimeout(()=>{
            Animated.parallel([
                Animated.timing(regOpacity,{
                    toValue: props.selection == 'Login' ? 0 : 1,
                    duration: 500,
                    useNativeDriver:false
                }),
                Animated.timing(props.regHeight,{
                    toValue: props.selection == 'Login' ? 0 : 1,
                    duration: 1,
                    useNativeDriver:false
                })
            ]).start()
        },props.selection != 'Login' ? 700 : 0)
    }

    useEffect(()=>{
        animateRegister()
    },[props.selection])

    return(
        <Animated.View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:45,fontWeight:'200'}}>Let's Register</Text>
        </Animated.View>
    )
}