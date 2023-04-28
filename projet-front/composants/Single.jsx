import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Single = ({route}) => {
    const [resultat,setResultat]=useState({})
    
    useEffect(function (){
   fetch("http://10.0.2.2:4006/"+route.params.id)
   .then(reponse=>reponse.json()) 
   .then(data=> {setResultat(data);
    // console.log(data)
    })
    },[])
  return (
    <View>
      <Text>Détail de loeuvre</Text>  
      <Text>{JSON.stringify(resultat.description)}</Text>
     
    </View>
  )
}

export default Single

const styles = StyleSheet.create({})