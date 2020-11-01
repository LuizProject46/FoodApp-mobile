import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import peopleImg from '../../../assets/images/people1.png'
export default function SignupStep1(){
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Peça comida de um jeito fácil</Text>
        <Image style={styles.peopleImg} source={peopleImg}/>
        <TouchableOpacity style={styles.btn} onPress={()=>{
          navigation.navigate('signup2')
        }}>
          <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:  'center',
    justifyContent: 'center',
    backgroundColor: '#E92554'
  },
  peopleImg:{
    resizeMode: 'cover',
    width: 280,
    height: 400,
    transform: [{
      rotateZ: '-2deg'
    }],
    marginRight: 100
  },
  title:{
    fontSize: 40,
    marginBottom: 20,
    marginTop: -20,
    padding: 20,
    fontFamily: 'Nunito_700Bold',
    color: '#fff'
    
   
  },
  btn:{
    width: 300,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 30
  },
  textBtn:{
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    color: '#E92554'
  }
})