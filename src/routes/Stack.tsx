import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'

import {createDrawerNavigator} from '@react-navigation/drawer'

import Search from '../pages/Search';
import TabBar from './TabBar';
import Cart from '../pages/Cart';
import { StyleSheet } from 'react-native';
import Header  from '../components/Header';
import DrawerBar from './DrawerBar';

const {Navigator,Screen} = createStackNavigator()



export default function Stack(){
  return (
    <NavigationContainer >
      <Navigator initialRouteName='Tab' screenOptions={{
        headerShown: false
      }}>

        
        <Screen name='home'  component={TabBar}/>
       
        <Screen name='search' component={Search}/>
        <Screen name='cart'component={Cart}
        options={{
          headerShown: true,
          header: ()=> <Header title='Meu carrinho'/>

          
        }}
        />
      </Navigator>
     
    </NavigationContainer>
    

  )
}




