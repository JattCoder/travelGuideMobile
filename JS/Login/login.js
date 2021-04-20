import React,{ useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Header from './Components/header'
import Welcome from './Components/welcome'
import Inputs from './Components/Inputs/inputs'
import Api from './Components/API/api'

export default Login = () => {

    const [currentPage,setCurrentPage] = useState('Login')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return(
        <View style={Styles.frame}>
            <View style={Styles.header}><Header setPage={setCurrentPage}/></View>
            <View style={{height:'83%',width:'100%',position:'absolute',bottom:0,alignItems:'center'}}>
                <View style={{width:'85%',height:'15%'}}>
                    <View style={{position:'absolute',bottom:0}}><Welcome /></View>
                </View>
            </View>
            <View style={{width:'83%',height:'55%',position:'absolute',bottom:0}}>
                <Inputs setEmail={setEmail} setPassword={setPassword}/>
            </View>
            <View style={{width:'83%',height:'37%',position:'absolute',bottom:0}}>
                <Api />
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