import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React, { useContext,useEffect,useState } from 'react'
import { ProfilContext } from '../contexts/profilContext'
import * as SQLITE from "expo-sqlite"

const Accueil = () => {
  
    // const {jwt}= useContext(ProfilContext)
    // useEffect(function(){
    // //  const db= SQLITE.openDatabase("demo.sqlite");
      // db.transaction(function(tx){
        // tx.executeSql(`SELECT * FROM jwt
                    // `,
                      // [],
                      // function(transact, resultat){ console.log(resultat.rows._array) },
                      // function(transact , err){ console.log("erreur lors de la création") })
      // })
    // },[])
    const [resultat,setResultat]=useState([])
    useEffect(function (){
   fetch("http://10.0.2.2:4006/all")
   
   .then(reponse=>reponse.json())
   .then(data => {setResultat(data);console.log(data)})
    },[])
  return (
    <View>
      <Text>Ensemble des oeuvres disponible dans le musé</Text>
      <ScrollView>
      {resultat.map(function(r,index){
        return <View key ={index}>
          <Text>{r.nom}</Text>
          <Image source ={{uri:r.image}}style={{width:120,height:120}}/>
          <Text>{r.description}</Text>

        </View>
      })}
    </ScrollView>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({})