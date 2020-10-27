import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons'

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import TabBar from './TabBar';
import { color } from 'react-native-reanimated';


const {Navigator,Screen} = createDrawerNavigator()



export default function DrawerBar(){
  const navigation = useNavigation()
  return (
    
    <Navigator drawerStyle={{
      backgroundColor: '#E92554',
    
    }}
    drawerContentOptions={{
      activeTintColor: '#333',
      inactiveTintColor: '#fff',
      activeBackgroundColor: '#f5f5f5',
      labelStyle: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 18,
        marginLeft: 16,
      },
     itemStyle:{
       borderBottomWidth: 1,
       borderBottomColor: '#f5f5f5',
       padding: 3,

     },
     
    }}
    >
      <Screen name='profile' component={TabBar} initialParams={navigation} options={{
        title: 'Perfil',
        drawerIcon: ({color,size,focused})=>{
          return(
            <Feather name='user' size={size} color={focused ? '#333' : '#fff'} />
          )
        },
        
      }}
      
      />
      <Screen name='home' component={TabBar} initialParams={navigation}
      
      options={{
        title: 'Inicio',
        drawerIcon: ({color,size,focused})=>{
          return(
            <Feather name='home' size={size} color={focused ? '#333' : '#fff'} />
          )
        },
        
      }}
      
      />
    </Navigator>
      
    

  )
}




