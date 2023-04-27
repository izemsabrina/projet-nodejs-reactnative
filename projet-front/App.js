import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navstack from './composants/Navstack';
import Login from './composants/Login';
import { ProfilContextProvider } from './contexts/profilContext';



const Tab=createBottomTabNavigator()


export default function App() {
  return (
    <View style={styles.container}>
      <ProfilContextProvider>
      <NavigationContainer>
        
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}>
        <Tab.Screen name="Accueil_default" component={Navstack}
        options={{
          tabBarIcon:()=><MaterialCommunityIcons name='home' size={30}/>
        }}/>
        <Tab.Screen name="connexion" component={Login}
        options={{
          tabBarIcon:()=><MaterialCommunityIcons name='login' size={30}/>
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
      </ProfilContextProvider>
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
