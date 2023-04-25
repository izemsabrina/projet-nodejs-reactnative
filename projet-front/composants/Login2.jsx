import { StyleSheet, TextInput,Button, View ,Text} from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation} )=> {
    const [login,setLogin]=useState("")
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='email' style={styles.input} value={Login} onChangeText={(text)=> setLogin(text)}/>
      <TextInput placeholder='password' style={styles.input} />
      <Button onPress={() => navigation.navigate("creer-compte" , {query : login})} title="voulez-vous créer un compte?" />
      </View>
   
  )
}

export default Login

const styles = StyleSheet.create({
    
})