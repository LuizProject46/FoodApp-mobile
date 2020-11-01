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
import SignupStep1 from '../pages/Signup/SignupStep1';
import SignupStep2 from '../pages/Signup/SignupStep2';
import SignupStep3 from '../pages/Signup/SignupStep3';


const {Navigator,Screen} = createStackNavigator()



export default function Stack(){
  return (
    <NavigationContainer >
      <Navigator initialRouteName='Tab' screenOptions={{
        headerShown: false
      }}>

        
        <Screen name='signin' component={Signin}
        />
         <Screen name='signup1' component={SignupStep1}
        />
         <Screen name='signup2' component={SignupStep2}
        />
        <Screen name='signup3' component={SignupStep3}
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




