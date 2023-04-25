import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React , {useState} from 'react'


const Login = ({navigation}) => {
    const [login, setLogin] =useState("")
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="email" style={styles.forme} value={login} onChangeText={(text) => setLogin(text)}/>
      <TextInput placeholder='password' style={styles.forme}/>
      <Button onPress={() => navigation.navigate("creer-compte" , {query : login})} title="voulez-vous créer un compte?" />
    </View>
  )
}


export default Login

const styles = StyleSheet.create({
    forme : {
        borderWidth : 1,
        padding : 15 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 15
    }
})