import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';


const {Navigator,Screen} = createBottomTabNavigator()



export default function TabBar(){
  return (
    
      <Navigator 
       tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          borderTopColor: '#ebebf5'
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
          elevation: 3
        },
        labelStyle: {
          fontFamily: 'Nunito_400Regular',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#f2f2f2',
        activeBackgroundColor: '#f2f2f2',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
      >
        <Screen name='home' component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color,size,focused}) =>{
            return (
              <Feather name='home' size={size} color={focused ? '#E92554' : '#ADADAF'}/>
            )
          }
        }}
        />
        

      <Screen name='favorites' component={Favorites}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color,size,focused}) =>{
            return (
              <Feather name='heart' size={size} color={focused ? '#E92554' : '#ADADAF'}/>
            )
          }
        }}
        
        />

      <Screen name='profile' component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color,size,focused}) =>{
            return (
              <Feather name='user' size={size} color={focused ? '#E92554' : '#ADADAF'}/>
            )
          }
        }}
        
        />
       
      </Navigator>
     
    
    

  )
}




