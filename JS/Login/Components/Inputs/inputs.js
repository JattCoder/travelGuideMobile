import React,{ useState, useEffect } from 'react'
import { View, Animated } from 'react-native'
import Email from './components/email'
import Password from './components/password'

export default Inputs = (props) => {

    const [emailFade] = useState(new Animated.Value(0))
    const [passFade] = useState(new Animated.Value(0))

    animateInputs = () => {
        setTimeout(()=>{
            setTimeout(()=>{
                Animated.timing(passFade,{
                    toValue:1,
                    duration:500,
                    useNativeDriver:false
                }).start()
            },400)
            Animated.timing(emailFade,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start()
        },2000)
    }

    useEffect(()=>{
        animateInputs()
    },[])

    return(
        <View>
            <Animated.View style={{height:'40%',opacity:emailFade}}><Email setEmail={props.setEmail}/></Animated.View>
            <Animated.View style={{height:'40%',marginTop:'-16%',opacity:passFade}}><Password setPassword={props.setPassword}/></Animated.View>
        </View>
    )
}