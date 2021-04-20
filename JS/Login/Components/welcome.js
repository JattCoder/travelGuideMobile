import React,{ useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

export default Welcome = () => {

    const [toOpacity] = useState(new Animated.Value(0))
    const [frameMarginLeft] = useState(new Animated.Value(-50))
    const [frameOpacity] = useState(new Animated.Value(0))
    const [appNameOpacity] = useState(new Animated.Value(0))

    animateWelcome = () => {
        Animated.parallel([
            Animated.timing(frameMarginLeft,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(frameOpacity,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }),
        ]).start(()=>Animated.timing(toOpacity,{
            toValue:1,
            duration:500,
            useNativeDriver:false
        }).start(()=>Animated.timing(appNameOpacity,{
            toValue:1,
            duration:500,
            useNativeDriver:false
        }).start()))
    }

    useEffect(()=>{
        animateWelcome()
    },[])

    return(
        <View>
            <Animated.View style={{flexDirection:'row',marginLeft:frameMarginLeft,opacity:frameOpacity}}>
                <Text style={{fontSize:45,fontWeight:'200'}}>Welcome </Text>
                <Animated.View style={{opacity:toOpacity}}>
                    <Text style={{fontSize:45,fontWeight:'200'}}>To,</Text>
                </Animated.View>
            </Animated.View>
            <Animated.View style={{opacity:appNameOpacity}}><Text style={{fontWeight:'900',fontSize:15}}> ULTIMATE TRAVEL GUIDE</Text></Animated.View>
        </View>
    )
}