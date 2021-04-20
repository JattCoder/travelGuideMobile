import React,{ useState } from 'react'
import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import Header from './Components/header'
import Welcome from './Components/welcome'
import Inputs from './Components/Inputs/inputs'
import Api from './Components/API/api'
import Register from '../Register/register'
import Bottom from './Components/Bottom/bottom'

export default Login = () => {

    const [currentPage,setCurrentPage] = useState('Login')
    const [api,setApi] = useState('JS')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [registerHeight] = useState(new Animated.Value(0))
    const [welcomeLeft] = useState(new Animated.Value(0))
    const [welcomeOpacity] = useState(new Animated.Value(1))
    const [inputOpacity] = useState(new Animated.Value(1))
    const [apiOpacity] = useState(new Animated.Value(1))

    loginAttempt = () => {
        if(email == '' || password == '') console.warn('Something is empty')
        else console.warn('Email: '+email+'\nPassword: '+password)
    }

    registerAttempt = () => {
        console.warn('Register')
    }

    if(currentPage){
        Animated.parallel([
            Animated.timing(welcomeLeft,{
                toValue:currentPage == 'Login' ? 0 : -Dimensions.get('screen').width/4,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(welcomeOpacity,{
                toValue:currentPage == 'Login' ? 1 : 0,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(inputOpacity,{
                toValue:currentPage == 'Login' ? 1 : 0,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(apiOpacity,{
                toValue:currentPage == 'Login' ? 1 : 0,
                duration:500,
                useNativeDriver:false
            })
        ]).start()
    }

    const registerHeightInterpolate = registerHeight.interpolate({
        inputRange:[0,1],
        outputRange:['0%','83%']
    })

    return(
        <View style={Styles.frame}>
            <View style={Styles.header}><Header setPage={setCurrentPage}/></View>
            <Animated.View style={{height:'83%',width:'100%',position:'absolute',left:welcomeLeft,opacity:welcomeOpacity,bottom:0,alignItems:'center'}}>
                <View style={{width:'85%',height:'15%'}}>
                    <View style={{position:'absolute',bottom:0}}><Welcome /></View>
                </View>
            </Animated.View>
            <Animated.View style={{width:'83%',height:'55%',position:'absolute',bottom:0,opacity:inputOpacity}}>
                <Inputs setEmail={setEmail} setPassword={setPassword}/>
            </Animated.View>
            <Animated.View style={{width:'83%',height:'37%',position:'absolute',bottom:0,opacity:apiOpacity}}>
                <Api setApi={setApi} api={api}/>
            </Animated.View>
            <Animated.View style={{width:'100%',height:registerHeightInterpolate,position:'absolute',bottom:0}}>
                <Register selection={currentPage}/>
            </Animated.View>
            <View style={{width:'100%',height:'13%',position:'absolute',bottom:0}}>
                <Bottom attempt={currentPage == 'Login' ? () => loginAttempt() : () => registerAttempt()} selection={currentPage}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    frame:{
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      justifyContent:'center',
      alignItems: 'center'
    },
    header:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'13%',
    }
  })