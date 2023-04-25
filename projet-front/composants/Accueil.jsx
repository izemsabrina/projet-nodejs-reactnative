import { StyleSheet, Text, View } from 'react-native'
import React, { useContext,useEffect } from 'react'
import { ProfilContext } from '../contexts/Context'

const Accueil = () => {
    const {jwt}= useContext(ProfilContext)
  return (
    <View>
      <Text>Ensemble des oeuvres disponible dans le musé</Text>
      <Text>{jwt}</Text>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({})