import { StyleSheet, Text, View,ScrollView,Image,Button } from 'react-native'
import React, { useContext,useEffect,useState } from 'react'


const Admin = () => {
    const [resultat,setResultat]=useState([])
    useEffect(function (){
   fetch("http://10.0.2.2:4006/all")
   .then(reponse=>reponse.json())
   .then(data => {setResultat(data)})
    },[resultat])

   function supprimer (id){
    fetch("http://10.0.2.2:4006/"+ id,{method:"delete"})
   .then(reponse=>reponse.json())
   .then(data => {fetch("http://10.0.2.2:4006/all")
   .then(reponse=>reponse.json())
   .then(data => {setResultat(data)})
    })
   }

  return (
    <View style={{marginTop:30}} >
      <Text>Gestion des oeuvres</Text>
      <Button title='créer une nouvelle oeuvre' onPress={()=>{}}/>
      <ScrollView>
      {resultat.map(function(r,index){
        return <View key ={index} style={styles.box}>
          <Text>{r.nom}</Text>
          <Image source ={{uri:r.image}} style={{width:120,height:120}}/>
          {/* <Text>{r.description}</Text> */}
          <View style={{flexDirection:"row", marginBottom:20, justifyContent:"center"}}>
          <Button title="supprimer" onPress={()=>{supprimer(r._id)}} color={"red"}/>
          <Button title="modifier" onPress={()=>{}} color={"orange"}/>
          </View>
        </View>
      })}
    </ScrollView>
    </View>
  )
}

  


export default Admin

const styles = StyleSheet.create({})