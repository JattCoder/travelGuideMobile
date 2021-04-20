import React,{ useState, useEffect } from 'react'
import { View, Text, Animated, TextInput } from 'react-native'

export default Password = (props) => {

    const [passwordOpacity] = useState(new Animated.Value(0))
    const [passwordUnderline] = useState(new Animated.Value(0))

    displayPassword = () => {
        Animated.timing(passwordOpacity,{
            toValue:1,
            duration:500,
            useNativeDriver:false
        }).start()
    }

    passwordAnimation = (action) => {
        Animated.timing(passwordUnderline,{
            toValue:action == 'focus' ? 1 : 0,
            duration:200,
            useNativeDriver:false
        }).start()
    }

    useEffect(()=>{
        displayPassword()
    },[])

    const passwordUnderlineInterpolate = passwordUnderline.interpolate({
        inputRange:[0,1],
        outputRange:['#C0C0C0','#000000']
    })

    return(
        <Animated.View style={{width:'100%',height:'30%',opacity:passwordOpacity}}>
            <TextInput onChangeText={(email)=>props.setPassword(email)} secureTextEntry={true} onFocus={()=>passwordAnimation('focus')} onBlur={()=>passwordAnimation('blur')}  placeholder={'Password'}  style={{height:'100%', width:'100%',paddingHorizontal:'1%',fontSize:15}}/>
            <Animated.View style={{width:'100%',borderWidth:1,borderColor:passwordUnderlineInterpolate}}/>
        </Animated.View>
    )
}