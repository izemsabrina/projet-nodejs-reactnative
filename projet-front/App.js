import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accueil from './composants/Accueil';
import Login from './composants/Login';


const Tab=createBottomTabNavigator()


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="accueil" component={Accueil}
        options={{
          tabBarIcon:()=><MaterialCommunityIcons name='home' size={30}/>
        }}/>
        <Tab.Screen name="connexion" component={Login}
        options={{
          tabBarIcon:()=><MaterialCommunityIcons name='login' size={30}/>
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
