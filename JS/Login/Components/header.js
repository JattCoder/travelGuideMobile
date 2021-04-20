import React,{ useState, useEffect } from 'react'
import { Animated, Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default Header = (props) => {

    const [loginColor] = useState(new Animated.Value(1))
    const [registerColor] = useState(new Animated.Value(0))
    const [loginUnderline] = useState(new Animated.Value(1))
    const [registerUnderline] = useState(new Animated.Value(0))

    const loginColorInterpolate = loginColor.interpolate({
        inputRange:[0,1],
        outputRange:['#C0C0C0','#000000']
    })

    const registerColorInterpolate = registerColor.interpolate({
        inputRange:[0,1],
        outputRange:['#C0C0C0','#000000']
    })

    const loginUnderlineInterpolate = loginUnderline.interpolate({
        inputRange:[0,1],
        outputRange:['white','#000000']
    })

    const registerUnderlineInterpolate = registerUnderline.interpolate({
        inputRange:[0,1],
        outputRange:['white','#000000']
    })

    login = () => {
        Animated.parallel([
            Animated.timing(registerColor,{
                toValue:0,
                duration:200,
                useNativeDriver:false
            }),
            Animated.timing(registerUnderline,{
                toValue:0,
                duration:200,
                useNativeDriver:false
            })
        ]).start(()=>Animated.parallel([
            Animated.timing(loginColor,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(loginUnderline,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            })
        ]).start(()=>setPage('Login')))
    }

    signup = () => {
        Animated.parallel([
            Animated.timing(loginColor,{
                toValue:0,
                duration:200,
                useNativeDriver:false
            }),
            Animated.timing(loginUnderline,{
                toValue:0,
                duration:200,
                useNativeDriver:false
            })
        ]).start(()=>Animated.parallel([
            Animated.timing(registerColor,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(registerUnderline,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            })
        ]).start(()=>setPage('Sign Up')))
    }

    setPage = (selection) => {
        props.setPage(selection)
    }

    return(
        <Animated.View style={{width:'100%',height:'100%'}}>
            <View style={{position:'absolute',bottom:0,flexDirection:'row'}}>
                <TouchableOpacity activeOpacity={1} onPress={()=>login()} style={{marginLeft:'30%'}}>
                    <Animated.Text style={{color:loginColorInterpolate,fontWeight:'bold',width:'50%'}}>Login</Animated.Text>
                    <Animated.View style={{width:'50%',borderWidth:1,marginTop:'10%',borderColor:loginUnderlineInterpolate}} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>signup()}>
                    <Animated.Text style={{color:registerColorInterpolate,fontWeight:'bold',marginHorizontal:'5%',width:'80%'}}>Sign Up</Animated.Text>
                    <Animated.View style={{width:'80%',borderWidth:1,marginTop:'10%',borderColor:registerUnderlineInterpolate}} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        paddingHorizontal:'5%'
    }
})