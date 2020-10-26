import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';


const {Navigator,Screen} = createDrawerNavigator()



export default function DrawerBar(){
  return (
    
    <Navigator>
      <Screen name='profile' component={Profile}/>
    </Navigator>
      
    

  )
}




