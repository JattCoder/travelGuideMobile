import React from 'react'
import { Provider } from 'react-redux'
import Store from './store/store'
import 'react-native-gesture-handler'
import Login from './JS/Login'

const store = Store()

export default App = () => {
  return(
    <Provider store={store}>
      <Login />
    </Provider>
  )
}