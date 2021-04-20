import React,{ useState, useEffect } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import Forgotpassword from './components/forgotpassword'
import ActionButton from './components/actionButton'

export default Bottom = (props) => {

    const [forgotpasswordOpacity] = useState(new Animated.Value(0))
    const [bottombar] = useState(new Animated.Value(-Dimensions.get('screen').height/4))
    const [buttonRight] = useState(new Animated.Value(-Dimensions.get('screen').width/4))
    const [buttonOpacity] = useState(new Animated.Value(0))

    animateBottom = () => {
        setTimeout(()=>Animated.timing(bottombar,{
            toValue:0,
            duration:500,
            useNativeDriver:false
        }).start(()=>Animated.parallel([
            Animated.timing(forgotpasswordOpacity,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(forgotpasswordOpacity,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(buttonRight,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(buttonOpacity,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            })
        ]).start()),3500)
    }

    useEffect(()=>{
        animateBottom()
    },[])

    return(
        <View style={{height:'100%',width:'100%'}}>
            <Animated.View style={{opacity:forgotpasswordOpacity}}><Forgotpassword /></Animated.View>
            <Animated.View style={{position:'absolute',bottom:bottombar,width:'100%',height:'75%',backgroundColor:'#C0C0C0'}}/>
            <Animated.View style={{position:'absolute',height:'100%',width:'35%',right:buttonRight,opacity:buttonOpacity}}>
                <ActionButton attempt={props.attempt}/>
            </Animated.View>
        </View>
    )
}