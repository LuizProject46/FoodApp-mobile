import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View,Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


export default function SignupStep2(){
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const navigation = useNavigation()

  function handleSubmit(){
    const data = {
      name,
      email,
      password
    }


    navigation.navigate('signup3',data)
  }

  return(

    
    <View style={styles.container}>
      <KeyboardAvoidingView style={{alignItems: 'center'}}
    behavior={Platform.OS == 'android' ? 'height': 'padding'}
      keyboardVerticalOffset={40}
      >
        <Text style={styles.title}>Informe seus dados</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <TextInput 
          placeholder='Nome' 
          style={styles.input}
          onChangeText={setName}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput 
          placeholder='E-mail' 
          style={styles.input} 
          onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput 
          placeholder='Senha' 
          secureTextEntry={true} 
          style={styles.input}
          onChangeText={setPassword}
          />

        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.textBtn}>Continuar</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
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
  },
  card:{
    width: 350,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25
  },
  label:{
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold',
    color: '#666',
    marginBottom: 10
  },
  input:{
    width: 300,
    backgroundColor: '#f5f5f5',
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20
  }
})