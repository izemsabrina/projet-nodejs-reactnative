import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React , {useState,useEffect, useContext } from 'react'
import { ProfilContext } from '../contexts/profilContext'
const Oeuvre = ({db}) => {
  const { setJWT} = useContext(ProfilContext)

  const [oeuvre , setOeuvre] = useState([])
  const { modifier  } = useContext(ProfilContext); 

  useEffect( function(){
      db.transaction(function(tx){
          tx.executeSql(`SELECT id , titre , contenu , strftime('%d/%m/%Y' , dt_creation ) AS date FROM oeuvre ;` ,
                  [] ,
                  function( transact, resultat){ 
                        console.log( resultat.rows._array )
                      setOeuvre(resultat.rows._array)
                  },
                  function( transact , err){ 
                      console.log("ERREUR lors du SELECT" , err)
                  }
          )
      })
  } , [oeuvre]);

  function supprimer(id){
  //appel à l'API    
  }


    const submit = function(){

        fetch("http://10.0.2.2:4003/all/" , { method : "get" , body : JSON.stringify(identifiant), headers : {"content-type" : "application/json"}})
        .then(reponse=> reponse.json())
        .then(data=>{
          console.log(data)
          setJWT(data.token)})
    }
  return (
    <ScrollView>
        <View>
        <Text>Liste des oeuvres</Text>
            { oeuvre.map(function(article){
                return <View key={oeuvre.id} style={styles.forme}>
                        <Text>{ oeuvre.titre }</Text>
                        <Text>{ oeuvre.contenu }</Text>
                        <Text>{ oeuvre.date }</Text>
                        <View style={styles.actions}>
                            <Button title="modifier" onPress={ () => modifier(oeuvre) } color="orange"/>
                            <Button title="supprimer" onPress={ () => supprimer(oeuvre.id) } color="red"/>
                        </View>
                    </View>
            } ) }
        </View>
    </ScrollView>
  )
}
export default Oeuvre

const styles = StyleSheet.create({
    forme : {
        borderWidth : 1,
        padding : 15 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 15
    }
})