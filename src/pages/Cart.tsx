import React, { useState } from 'react';
import { Text, View ,StyleSheet, Dimensions, SafeAreaView, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { Animated } from 'react-native'

import {PanGestureHandler,State} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import foodImg from '../../assets/images/food.png'

export default function Cart(){

  let translateX = new Animated.Value(0)
 let offset = 0
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationX: translateX
        }
      }
    ],
    {useNativeDriver: true}
  )
  function onHandler(event: any){
    if(event.nativeEvent.oldState == State.ACTIVE){
      let opened = false
      const {translationX} = event.nativeEvent
      offset += translationX
      
      if(translationX <= -100){
        opened = true
      }else{
        translateX.setValue(offset)
        translateX.setOffset(0)
        offset = 0
        
      }
      Animated.timing(translateX,{
        toValue: opened ? -100 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(()=>{
        offset = opened ? -100 : 0
        translateX.setOffset(offset)
        translateX.setValue(0)
      })
    }
  }

  return (
    <>
    
    <View style={styles.container}>
      
    
     
    <ScrollView style={styles.scrollWrapper}>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.deleteItem}>
          <Feather name='heart' size={30} color='#fff'/>
        </TouchableOpacity>
     
      <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandler}
      
      >
        
         <Animated.View style={{
            width: 300,
            height: 120,
            backgroundColor: '#fff',
            borderRadius: 20,
            marginTop: 15,
            marginBottom: 15,
            transform: [{
              translateX: translateX.interpolate({
                inputRange:[-100,0,0],
                outputRange:[-100,0,0],
                extrapolate: 'clamp'
              })
            }]
         }}>
            <View style={styles.listItemContent}>
              <Image style={styles.imageFood} source={foodImg}/>
              <Text style={styles.itemName}>Comida caseira</Text>
              <Text style={styles.priceItem}>R$10,00</Text>
            </View>
            <View style={styles.addItem}>
                <TouchableOpacity>
                  <Text style={{fontSize: 28,color: '#fff',paddingHorizontal: 12}}>-</Text>
                </TouchableOpacity>
                <Text style={{color: '#fff',fontSize: 20}}>0</Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 26,color: '#fff',paddingHorizontal: 8}}> + </Text>
                </TouchableOpacity>
              </View>
         
        </Animated.View>
        
      </PanGestureHandler>
      
      </View>
      
    </ScrollView>
     <TouchableOpacity style={styles.closeOrder}>
       <Text style={styles.closeOrderText}>Fechar Pedido</Text>
     </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    marginTop: 20
  },
  text:{
    alignSelf: 'center',
    fontSize: 29,
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  },
  listItem:{
    width: 300,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 15,
    position: 'absolute'

  },
  scrollWrapper:{ 
    width: Dimensions.get('window').width
  },
  imageFood:{
    width: 100,
    height: 100,
    marginTop: 10,
    position: 'absolute',
    left: 0

  },
  listItemContent:{
    alignItems: 'center',
    
  },
  itemName:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10
  },
  priceItem:{
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    color: '#E92554'
  },
  addItem:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E92554',
    width: 80,
    borderRadius: 14,
    height: 30,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginHorizontal: 10,
    marginBottom: 10

  },
  closeOrder:{
    backgroundColor: '#E92554',
    padding: 20,
    width: 300,
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
    
  },
  closeOrderText:{
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Nunito_600SemiBold'
  },
  deleteItem:{
    backgroundColor: '#f6374a',
    padding: 20,
    borderRadius: 50,
    
    
   
  }
})