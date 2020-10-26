import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface Header{
  title: string,
 
}


export default function Header({title}: Header){
 

  const navigation = useNavigation()

  function handleGoBackHome(){
    navigation.navigate('OrphanagesMap')
  }
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name='arrow-left' size={24} color='#333'/>
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      
        <View/>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    padding: 24,
    backgroundColor: '#f2f2f2',
   
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontFamily: 'Nunito_700Bold',
    color: '#333',
    fontSize: 18
  }
})