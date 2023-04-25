import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React , {useState} from 'react'


const Login = ({navigation}) => {
    const [email, setEmail] =useState("sabrinatine@yahoo.fr")
    const [password, setPassword] =useState("Paris1ie2")

    const submit = function(){
        const identifiant = { email, password}
        console.log(identifiant)
        fetch("http://10.0.2.2:4003/login" , { method : "post" , body : JSON.stringify(identifiant), headers : {"content-type" : "application/json"}})
        .then(reponse=> reponse.json())
        .then(data=>console.log(data))
    }
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="email" style={styles.forme} value={email} onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder='password' style={styles.forme} value={password} onChangeText={(text) => setPassword(text)}/>
      <Button onPress={ submit } title="voulez-vous créer un compte?" />
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