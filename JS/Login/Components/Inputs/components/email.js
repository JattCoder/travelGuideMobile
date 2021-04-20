import React,{ useState, useEffect } from 'react'
import { View, Text, Animated, TextInput } from 'react-native'

export default Email = (props) => {

    const [emailOpacity] = useState(new Animated.Value(0))
    const [emailUnderline] = useState(new Animated.Value(0))

    displayEmail = () => {
        Animated.timing(emailOpacity,{
            toValue:1,
            duration:500,
            useNativeDriver:false
        }).start()
    }

    emailAnimation = (action) => {
        Animated.timing(emailUnderline,{
            toValue: action == 'focus' ? 1 : 0,
            duration:200,
            useNativeDriver:false
        }).start()
    }

    useEffect(()=>{
        displayEmail()
    },[])

    const emailUnderlineInterpolate = emailUnderline.interpolate({
        inputRange:[0,1],
        outputRange:['#C0C0C0','#000000']
    })

    return(
        <Animated.View style={{width:'100%',height:'30%',opacity:emailOpacity}}>
            <TextInput onChangeText={(email)=>props.setEmail(email)} autoCapitalize={'none'} onFocus={()=>emailAnimation('focus')} onBlur={()=>emailAnimation('blur')} placeholder={'Email address'}  style={{height:'100%', width:'100%',paddingHorizontal:'1%',fontSize:15}}/>
            <Animated.View style={{width:'100%',borderWidth:1,borderColor:emailUnderlineInterpolate}}/>
        </Animated.View>
    )
}