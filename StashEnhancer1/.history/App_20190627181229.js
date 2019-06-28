import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Search for yarn stores:</Text>
      <Text>Maximum distance:</Text><TextInput  
          placeholder="enter max distance"  
          underlineColorAndroid='transparent'  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}></TextInput> 
      <Text>Set alert to:</Text>
      <Text>Your distance from a yarn store:</Text><TextInput  
          placeholder="enter distance"  
          underlineColorAndroid='transparent'  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}></TextInput>
      <Button
        // onPress={onPressLearnMore}
        title="look for yarn"
        color="#e1fcff"
        accessibilityLabel="search for yarn stores"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    marginBottom: 10,
    padding: 7  
  },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 10
  // },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
  },  
});
