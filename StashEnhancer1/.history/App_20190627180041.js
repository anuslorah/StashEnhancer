import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Search for yarn stores:</Text>
      <Text>Maximum distance</Text><TextInput  
          placeholder="enter max distance"  
          underlineColorAndroid='transparent'  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}></TextInput> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
  TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    marginBottom: 10  
  }  
});
