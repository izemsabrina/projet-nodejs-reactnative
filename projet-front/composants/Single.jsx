import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Single = ({route}) => {
    const [resultat,setResultat]=useState([])
    useEffect(function (){
   fetch("http://10.0.2.2:4006/:id")
   .then(reponse=>reponse.json())
   .then(data=> {setResultat(data);
    })
    },[])
  return (
    <View>
      <Text>Détail de loeuvre</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.description}</Text>
    </View>
  )
}

export default Single

const styles = StyleSheet.create({})