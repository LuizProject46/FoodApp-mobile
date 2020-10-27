import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default function Profile({navigation}:any){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        HELLO PROFILE!!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  text:{
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Nunito_400Regular',
    
  }
})