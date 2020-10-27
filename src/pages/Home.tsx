import React from 'react';

import { View,Text,StyleSheet, Dimensions,Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

import {Feather} from '@expo/vector-icons'

import foodImg from '../../assets/images/food.png'
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function Home({navigation}: any){
  

  function handleSearch(){
    
    console.log("oi")
    //navigation.navigate('search')
  }

  function handleMenu(){
    navigation.openDrawer()
  }

  function handleCart(){
    
    navigation.navigate('cart')
  }

  return (
    
    <View style={styles.container}>
        
      <View style={styles.header}>
      <TouchableOpacity style={styles.menuDraw} onPress={handleMenu}>
          <Feather size={30} color='#9A9A9D'name='align-left'/>  
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCart}>
          <Text style={styles.countCart}>6</Text>
          <Feather size={25} color='#9A9A9D'name='shopping-cart'/>  
        </TouchableOpacity>
        
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Comidas deliciosas para você
        </Text>
      </View>
      <View style={styles.searchForm}>
        <TextInput style={styles.searchInput} onSubmitEditing={handleSearch}
           placeholder='Pesquisar' />
      </View>
      
      <View style={styles.listFood}>
        <ScrollView horizontal   pagingEnabled showsHorizontalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
          <Image style={styles.images}source={foodImg}/>  
          <View style={styles.cardImg}>
            <Text style={styles.foodText}>
                Comidas caseiras
            </Text>
            <Text style={styles.foodPrice}>
              R$20,00
            </Text>
          </View>
          </View>
          <View style={{alignItems: 'center'}}>
          <Image style={styles.images}source={foodImg}/>  
          <View style={styles.cardImg}>
            <Text style={styles.foodText}>
                Comidas caseiras
            </Text>
            <Text style={styles.foodPrice}>
              R$20,00
            </Text>
          </View>
          </View>
          <View style={{alignItems: 'center'}}>
          <Image style={styles.images}source={foodImg}/>  
          <View style={styles.cardImg}>
            <Text style={styles.foodText}>
                Comidas caseiras
            </Text>
            <Text style={styles.foodPrice}>
              R$20,00
            </Text>
          </View>
          </View>
          <View style={{alignItems: 'center'}}>
          <Image style={styles.images}source={foodImg}/>  
          <View style={styles.cardImg}>
            <Text style={styles.foodText}>
                Comidas caseiras
            </Text>
            <Text style={styles.foodPrice}>
              R$20,00
            </Text>
          </View>
          </View>
          
         
       
        </ScrollView>
      </View>
    
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    
  },
  text:{
    alignSelf: 'center',
    fontSize: 29,
    fontFamily: 'Nunito_700Bold',
    
  },
  header: {
    flex: 0,
    width: Dimensions.get('window').width,
    top: 0,
    position: 'absolute',
    marginTop: 100,
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    height: 50,
    // borderBottomWidth: 20,
    // borderBottomColor: '#333'
    

  },
  titleContainer:{
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    top: 150
    
  },
  title: {
    color: 'black',
    fontSize: 34,
    fontFamily: 'Nunito_700Bold'
  },
  searchInput:{
    backgroundColor: '#efeeee',
    flex: 1,
    height: 50,
    elevation: 0.5,
    borderRadius: 20,
    //borderColor: '#c6c6c7',
    //borderWidth: 0.4,
    paddingHorizontal: 20
    
  },
  searchForm:{
    position: "absolute",
    top: 300,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
},
countCart:{
  backgroundColor: '#E92554',
  paddingHorizontal: 10,
  color: '#fff',
  borderRadius: 50,
  position: 'absolute',
  left: 15,
  top: -20
},
listFood: {
  flex: 1,
  top: 380,
  height: 600,
  position: 'absolute'
},
cardImg:{
  backgroundColor: '#FFFFFF',
  width: 250,
  height: 260,
  margin: 10,
  marginTop: 60,
  borderRadius: 30,
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,
  alignItems: 'center',
  justifyContent: 'center'
  

},
images: {
  resizeMode: 'cover',
  zIndex: 4,
  position: 'absolute',
  top: -3,
  left: 15
  
},
foodText:{
  fontSize: 23,
  fontFamily: 'Nunito_700Bold',
  color: '#333',
  marginTop: 30
},
foodPrice:{
  marginTop: 10,
  fontSize: 18,
  color: '#E92554',
  fontFamily: 'Nunito_600SemiBold'
},
menuDraw:{
 
  paddingHorizontal: 10,
  color: '#fff',
  borderRadius: 50,
  position: 'absolute',
  left: 15,
  top: -20,
  
}
})