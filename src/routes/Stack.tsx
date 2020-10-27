import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'

import {createDrawerNavigator} from '@react-navigation/drawer'

import Search from '../pages/Search';
import Signin from '../pages/Login/Signin';
import TabBar from './TabBar';
import Cart from '../pages/Cart';
import { StyleSheet } from 'react-native';
import Header  from '../components/Header';
import DrawerBar from './DrawerBar';
import Profile from '../pages/Profile';

const {Navigator,Screen} = createStackNavigator()



export default function Stack(){
  return (
    <NavigationContainer >
      <Navigator initialRouteName='Tab' screenOptions={{
        headerShown: false
      }}>

        
        <Screen name='signin' component={Signin}
        />
        <Screen name='home' component={DrawerBar}/>
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




