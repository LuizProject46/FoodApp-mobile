import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default function Search(){
  return (
    <View style={styles.container}>
      <Text>
        HELLO SEARCH!!
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
    fontSize: 29,
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  }
})