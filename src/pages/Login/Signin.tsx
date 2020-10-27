import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View ,StyleSheet, Dimensions, KeyboardAvoidingView, Platform, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import Header from '../../components/Header';

import logo from '../../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';
export default function Profile(){
  const navigation = useNavigation()

  return (
    <>
    <StatusBar backgroundColor='#E92554' 
    style='light'
    />
    <View style={styles.container}>
    
      <KeyboardAvoidingView behavior={Platform.OS == 'android' ? 'height': 'padding'}
      keyboardVerticalOffset={-40}
      >
       
        <View style={styles.card}>
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder='E-mail' style={styles.input}  autoFocus={true} />
            <TextInput placeholder='Senha' secureTextEntry style={styles.input}/>
            <TouchableOpacity style={styles.button} onPress={()=>{
              navigation.navigate('home')
            }}>
              <Text style={styles.text}>Signin  </Text>
              <Feather style={{position: 'absolute',top: 20,right:45}} name='log-in' size={25} color='#fff'/>
            
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#E92554',
    
  },
  text:{
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold',
    color: '#fff',
    
    
  },
  card:{
   
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width,
    height: 600,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
   

  },
  form:{
    flex: 1,
    alignItems: 'center',
    marginTop: 60
    
  },
  input:{
    //height: 20,
    paddingHorizontal: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E92554',
    width: 250,
    fontSize: 15,
    //marginBottom: 10,
    marginTop: 40
  },
  title: {
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
    color: '#333'
  },
  button:{
    backgroundColor: '#E92554',
    marginTop: 60,
    width: 200,
    padding: 20,
    alignItems: 'center',
    borderRadius: 16,
   

  }
})