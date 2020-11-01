import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View,Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import peopleImg from '../../../assets/images/people1.png'
import * as ImagePicker from 'expo-image-picker'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'


interface User{
  name: string;
  email: string;
  password: string
}

export default function SignupStep3(props : any){

  const user = props.route.params as User
  const [image,setImage] = useState('')
  const navigation = useNavigation()

  function handleRegister(){
    navigation.navigate('animation')
  }
  async function handleSelectImg(){
    const {status} = await ImagePicker.requestCameraRollPermissionsAsync()

    if(status != 'granted'){
      alert("Camera não foi permitida") 
      return false
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if(result.cancelled){
      return;
    }

    const {uri:image} = result;
   
    setImage(image)
    
  }

  function handleDeleteImg(){
    setImage('')
    console.log(image)
  }
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Insira sua foto </Text>
        
        {!image ? (

          <TouchableOpacity style={styles.btnSelectImg} onPress={handleSelectImg} >
          <Feather name='plus' size={50} color='#E92554'/>
          </TouchableOpacity>
        ):
        (
         
            <ImageBackground borderRadius={12} style={styles.uploadedImg} source={{uri: image}}>
              <TouchableOpacity style={styles.btnDelete} onPress={handleDeleteImg}>
                <Feather name='x' size={30} color='#E92554'/>
            </TouchableOpacity>
            </ImageBackground>
            
          
        )
      }
       

        <TouchableOpacity style={styles.btn} onPress={handleRegister} >
          <Text style={styles.textBtn}>Finalizar</Text>
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
  },
  btnSelectImg:{
    width: 300,
    height: 300,
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    borderWidth: 4,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center'

  },
  uploadedImg:{
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
    
    
  },
  btnDelete:{
    
    backgroundColor: '#f5f5f5',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
    
    
  }
})