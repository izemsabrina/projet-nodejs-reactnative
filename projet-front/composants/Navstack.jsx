import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Accueil from './Accueil'
import Single from './Single'

const Stack =createNativeStackNavigator()
const Navstack = () => {
  return (

    <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Accueil}/>
        <Stack.Screen name="single" component={Single}/>
    </Stack.Navigator>
  )
}

export default Navstack

const styles = StyleSheet.create({})