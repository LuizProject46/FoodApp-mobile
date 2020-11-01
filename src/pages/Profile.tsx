import React from 'react';
import { Text, View ,StyleSheet,Image} from 'react-native';

import {Feather} from '@expo/vector-icons'
import avatar from '../../assets/images/avataaars.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile({navigation}:any){
  return (
    <View style={styles.container}>
      <View style={styles.cardImg}>
        
        
        <Image style={styles.img} source={avatar}/>
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.btnEdit}>
            <Text style={styles.editText}><Feather name='edit' size={30} color='#fff'/></Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.labels}>Larissa</Text>
        <Text style={styles.labels}><Feather name='mail' size={20}/> larrissa@mail.com</Text>
        
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  text:{
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Nunito_400Regular',
    
  },
  cardImg:{
    width: 350,
    height: 350,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    borderRadius:10,
   
  },
  img:{
    width: 200,
    height: 200
  },
  labels:{
    fontSize: 18,
    color: '#333',
    fontFamily: 'Nunito_700Bold',
    marginTop: 10
  },
  editText:{
   
    
  },
  btnEdit:{
  
    width: 45,
    height: 45,
    backgroundColor: '#E92554',
    alignItems: 'center',
    padding: 2,
    justifyContent: 'center',
    borderRadius: 15,
   
  }
})